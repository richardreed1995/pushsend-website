# Form Integration Setup Instructions

## Overview
This form now sends data directly to Slack and Google Sheets instead of using Make webhooks, eliminating the automation failures.

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

## 2. Google Sheets Integration Setup

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

## 3. Environment Variables

Create `.env.local` in your project root:
```bash
# Slack Integration
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/WEBHOOK/URL

# Google Sheets Integration (Apps Script)
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

## 4. Testing

1. Fill out the form completely
2. Check your Slack channel for the notification
3. Check your Google Sheet for the new row
4. Check browser console for any errors

## 5. Benefits Over Make

✅ **No more webhook failures**  
✅ **Direct integration** - no third-party dependencies  
✅ **Real-time notifications** in Slack  
✅ **Automatic data logging** in Google Sheets  
✅ **Better error handling** and logging  
✅ **More reliable** than external webhook services  

## 6. Troubleshooting

- **Slack not working?** Check webhook URL and channel permissions
- **Google Sheets not updating?** Check Apps Script deployment and permissions
- **Form not submitting?** Check browser console for API errors
- **Environment variables not loading?** Restart your development server

## 7. Customization

You can easily modify:
- Slack message format in `/api/submit-form/route.ts`
- Google Sheets columns in the Apps Script
- Additional integrations (email, CRM, etc.)
- Data validation and processing
