# Form Integration Setup Instructions

## Overview
This form now sends data directly to Slack, Google Sheets, HubSpot, and Email Octopus instead of using Make webhooks, eliminating the automation failures.

## 1. Slack Integration Setup

### Step 1: Create Slack Webhook
1. Go to [Slack API Apps](https://api.slack.com/apps)
2. Click "Create New App" → "From scratch"
3. Name your app (e.g., "Lead Form Notifications")
4. Select your workspace
5. Go to "Incoming Webhooks" in the left sidebar
6. Click "Activate Incoming Webhooks"
7. Click "Add New Webhook to Workspace"
8. Choose the channel where you want notifications
9. Copy the webhook URL

### Step 2: Add Environment Variable
Create a `.env.local` file in your project root:
```bash
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/WEBHOOK/URL
```

## 2. HubSpot Integration Setup

### Step 1: Get HubSpot API Key
1. Go to [HubSpot Developers](https://developers.hubspot.com/)
2. Sign in to your HubSpot account
3. Go to "Account Setup" → "Integrations" → "Private Apps"
4. Click "Create private app"
5. Name your app (e.g., "Lead Form Integration")
6. Under "Scopes", add:
   - `crm.objects.contacts.write`
   - `crm.objects.contacts.read`
7. Click "Create app"
8. Copy the API key

### Step 2: Get Portal ID
1. In HubSpot, go to "Settings" → "Account Setup" → "Account Defaults"
2. Copy your Portal ID (it's in the URL: `https://app.hubspot.com/contacts/PORTAL_ID`)

### Step 3: Add Environment Variables
```bash
HUBSPOT_API_KEY=your_hubspot_api_key_here
HUBSPOT_PORTAL_ID=your_portal_id_here
```

### Step 4: Create Custom Properties (Optional)
In HubSpot, create these custom properties for better data organization:
- `business_type` (Single-line text)
- `monthly_revenue` (Single-line text)
- `has_funds` (Single-line text)
- `lead_source` (Single-line text)

## 3. Email Octopus Integration Setup

### Step 1: Get API Key
1. Log into [Email Octopus](https://emailoctopus.com/)
2. Go to "Account" → "API Keys"
3. Click "Generate new API key"
4. Copy the API key

### Step 2: Get List ID
1. Go to "Lists" in Email Octopus
2. Click on your target list
3. Copy the List ID from the URL: `https://emailoctopus.com/lists/LIST_ID`

### Step 3: Add Environment Variables
```bash
EMAIL_OCTOPUS_API_KEY=your_email_octopus_api_key_here
EMAIL_OCTOPUS_LIST_ID=your_list_id_here
```

### Step 4: Create Custom Fields (Optional)
In Email Octopus, create these custom fields:
- `FirstName` (Text)
- `LastName` (Text)
- `Phone` (Text)
- `BusinessType` (Text)
- `MonthlyRevenue` (Text)
- `HasFunds` (Text)
- `LeadSource` (Text)
- `SubmittedAt` (Text)

## 4. Google Sheets Integration Setup

### Option A: Google Apps Script (Recommended)

1. **Create a new Google Sheet**
2. **Go to Extensions → Apps Script**
3. **Replace the default code with:**

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Add headers if they don't exist
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'First Name',
        'Last Name', 
        'Email',
        'Phone',
        'Business Type',
        'Monthly Revenue',
        'Has Funds',
        'Submitted At',
        'User Agent',
        'Session ID'
      ]);
    }
    
    // Add new row
    sheet.appendRow([
      new Date(),
      data.firstName,
      data.lastName,
      data.email,
      data.phone,
      data.businessType,
      data.monthlyRevenue,
      data.hasFunds,
      data.submittedAt,
      data.userAgent,
      data.sessionId
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error:', error);
    return ContentService
      .createTextOutput(JSON.stringify({ error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. **Deploy the script:**
   - Click "Deploy" → "New deployment"
   - Choose "Web app"
   - Set "Execute as" to "Me"
   - Set "Who has access" to "Anyone"
   - Click "Deploy"
   - Copy the web app URL

5. **Add to environment variables:**
```bash
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

### Option B: Google Sheets API (Advanced)
If you prefer the official API, you'll need to:
1. Set up Google Cloud Project
2. Enable Google Sheets API
3. Create service account credentials
4. Share your sheet with the service account email

## 5. Environment Variables

Create `.env.local` in your project root:
```bash
# Slack Integration
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/WEBHOOK/URL

# HubSpot Integration
HUBSPOT_API_KEY=your_hubspot_api_key_here
HUBSPOT_PORTAL_ID=your_portal_id_here

# Email Octopus Integration
EMAIL_OCTOPUS_API_KEY=your_email_octopus_api_key_here
EMAIL_OCTOPUS_LIST_ID=your_list_id_here

# Google Sheets Integration (Apps Script)
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

## 6. Testing

1. Fill out the form completely
2. Check your Slack channel for the notification
3. Check HubSpot for the new contact
4. Check Email Octopus for the new subscriber
5. Check your Google Sheet for the new row
6. Check browser console for any errors

## 7. Benefits Over Make

✅ **No more webhook failures**  
✅ **Direct integration** - no third-party dependencies  
✅ **Real-time notifications** in Slack  
✅ **Automatic contact creation** in HubSpot  
✅ **Email list management** in Email Octopus  
✅ **Automatic data logging** in Google Sheets  
✅ **Better error handling** and logging  
✅ **More reliable** than external webhook services  

## 8. Troubleshooting

- **Slack not working?** Check webhook URL and channel permissions
- **HubSpot not working?** Check API key, portal ID, and contact permissions
- **Email Octopus not working?** Check API key and list ID
- **Google Sheets not updating?** Check Apps Script deployment and permissions
- **Form not submitting?** Check browser console for API errors
- **Environment variables not loading?** Restart your development server

## 9. Customization

You can easily modify:
- Slack message format in `/api/submit-form/route.ts`
- HubSpot contact properties in the `createHubSpotContact` function
- Email Octopus fields in the `addToEmailOctopusList` function
- Google Sheets columns in the Apps Script
- Additional integrations (email, CRM, etc.)
- Data validation and processing
