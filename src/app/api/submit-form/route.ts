import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email || !data.phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send to Slack
    if (process.env.SLACK_WEBHOOK_URL) {
      try {
        const slackMessage = {
          text: "🎯 New Lead Qualification Form Submission",
          blocks: [
            {
              type: "header",
              text: {
                type: "plain_text",
                text: "🎯 New Lead Qualification Form Submission"
              }
            },
            {
              type: "section",
              fields: [
                {
                  type: "mrkdwn",
                  text: `*Name:* ${data.firstName} ${data.lastName}`
                },
                {
                  type: "mrkdwn",
                  text: `*Email:* ${data.email}`
                },
                {
                  type: "mrkdwn",
                  text: `*Phone:* ${data.phone}`
                },
                {
                  type: "mrkdwn",
                  text: `*Business Type:* ${data.businessType?.toUpperCase() || 'N/A'}`
                },
                {
                  type: "mrkdwn",
                  text: `*Monthly Revenue:* ${data.monthlyRevenue || 'N/A'}`
                },
                {
                  type: "mrkdwn",
                  text: `*Has Funds:* ${data.hasFunds === 'yes' ? '✅ Yes' : '❌ No'}`
                }
              ]
            },
            {
              type: "context",
              elements: [
                {
                  type: "mrkdwn",
                  text: `Submitted at ${new Date().toLocaleString()}`
                }
              ]
            }
          ]
        };

        // Don't await - send in background
        fetch(process.env.SLACK_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(slackMessage),
        }).catch(slackError => {
          console.error("Slack notification failed:", slackError);
        });
      } catch (slackError) {
        console.error("Slack notification failed:", slackError);
      }
    }

    // Send to Google Sheets (you'll need to set up a Google Apps Script)
    if (process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
      try {
        // Don't await - send in background
        fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone,
            businessType: data.businessType,
            monthlyRevenue: data.monthlyRevenue,
            hasFunds: data.hasFunds,
            submittedAt: data.submittedAt || new Date().toISOString(),
            userAgent: data.userAgent,
            timestamp: data.timestamp || Date.now(),
            sessionId: data.sessionId
          }),
        }).catch(sheetsError => {
          console.error("Google Sheets update failed:", sheetsError);
        });
      } catch (sheetsError) {
        console.error("Google Sheets update failed:", sheetsError);
      }
    }

    // Add optional properties if they exist
    const contactData = {
      properties: {
        firstname: data.firstName,
        lastname: data.lastName,
        email: data.email,
        phone: data.phone,
        submitted_at: data.submittedAt || new Date().toISOString(),
        user_agent: data.userAgent,
        timestamp: data.timestamp || Date.now(),
        session_id: data.sessionId
      }
    };

    // Send to HubSpot
    if (process.env.HUBSPOT_API_KEY) {
      try {
        console.log("🔄 Attempting to create HubSpot contact...");
        console.log("📊 HubSpot Contact Data:", JSON.stringify(contactData, null, 2));
        console.log("🔑 Using API Key:", process.env.HUBSPOT_API_KEY ? "✅ Set" : "❌ Missing");
        
        const response = await fetch(`https://api.hubapi.com/crm/v3/objects/contacts`, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${process.env.HUBSPOT_API_KEY}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(contactData),
        });
        
        console.log("📡 HubSpot Response Status:", response.status);
        console.log("🔗 HubSpot API URL:", `https://api.hubapi.com/crm/v3/objects/contacts`);
        
        if (response.ok) {
          const responseData = await response.json();
          console.log("✅ HubSpot Contact Created Successfully:", responseData);
        } else {
          const errorData = await response.text();
          console.error("❌ HubSpot API Error:", response.status, errorData);
          console.error("🔍 Full error response:", errorData);
          
          // Try to parse error as JSON for better debugging
          try {
            const errorJson = JSON.parse(errorData);
            console.error("🔍 Parsed error:", errorJson);
          } catch (e) {
            console.error("🔍 Error response is not JSON");
          }
        }
      } catch (hubspotError) {
        console.error("💥 HubSpot Exception:", hubspotError);
      }
    } else {
      console.log("⚠️ HubSpot not configured - missing API key");
    }

    // Send to Email Octopus
    if (process.env.EMAIL_OCTOPUS_API_KEY && process.env.EMAIL_OCTOPUS_LIST_ID) {
      try {
        console.log("🔄 Attempting to add to Email Octopus list...");
        
        const emailOctopusData = {
          email_address: data.email,
          status: "SUBSCRIBED",
          merge_fields: {
            FirstName: data.firstName,
            LastName: data.lastName,
            Phone: data.phone,
            BusinessType: data.businessType || 'N/A',
            MonthlyRevenue: data.monthlyRevenue || 'N/A',
            HasFunds: data.hasFunds === 'yes' ? 'Yes' : 'No'
          }
        };
        
        console.log("📊 Email Octopus Data:", JSON.stringify(emailOctopusData, null, 2));
        
        const response = await fetch(`https://emailoctopus.com/api/1.6/lists/${process.env.EMAIL_OCTOPUS_LIST_ID}/contacts`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            api_key: process.env.EMAIL_OCTOPUS_API_KEY,
            ...emailOctopusData
          }),
        });
        
        console.log("📡 Email Octopus Response Status:", response.status);
        
        if (response.ok) {
          const responseData = await response.json();
          console.log("✅ Email Octopus Contact Added Successfully:", responseData);
        } else {
          const errorData = await response.text();
          console.error("❌ Email Octopus API Error:", response.status, errorData);
        }
      } catch (emailOctopusError) {
        console.error("💥 Email Octopus Exception:", emailOctopusError);
      }
    } else {
      console.log("⚠️ Email Octopus not configured - missing API key or list ID");
    }

    // Return success immediately - don't wait for integrations
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
