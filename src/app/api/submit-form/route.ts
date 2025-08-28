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

        await fetch(process.env.SLACK_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(slackMessage),
        });
      } catch (slackError) {
        console.error("Slack notification failed:", slackError);
      }
    }

    // Send to Google Sheets (you'll need to set up a Google Apps Script)
    if (process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
      try {
        await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, {
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
        });
      } catch (sheetsError) {
        console.error("Google Sheets update failed:", sheetsError);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
