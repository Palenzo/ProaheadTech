# 🚀 Proahead Technology Website - Setup Guide

## Quick Start

### Step 1: Install Dependencies
Open your terminal in the project folder and run:
```bash
npm install
```

### Step 2: Configure Email Service (IMPORTANT!)

The contact form uses EmailJS to send emails. Follow these steps:

1. **Create a free EmailJS account:**
   - Go to https://www.emailjs.com/
   - Sign up for a free account

2. **Set up Email Service:**
   - Go to "Email Services" in your dashboard
   - Add a new service (Gmail, Outlook, etc.)
   - Note your **Service ID**

3. **Create Email Template:**
   - Go to "Email Templates"
   - Create a new template
   - Use these variables in your template:
     ```
     From: {{from_name}}
     Email: {{from_email}}
     Phone: {{phone}}
     Company: {{company}}
     Subject: {{subject}}
     Message: {{message}}
     ```
   - Note your **Template ID**

4. **Get your User ID:**
   - Go to "Account" → "General"
   - Copy your **Public Key** (User ID)

5. **Update the Contact Component:**
   - Open `src/components/Contact/Contact.jsx`
   - Find line ~47-49 and replace:
     ```javascript
     const serviceID = 'YOUR_SERVICE_ID'; // Replace with your Service ID
     const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID
     const userID = 'YOUR_USER_ID'; // Replace with your Public Key
     ```
   - Line ~52: Replace the receiving email:
     ```javascript
     to_email: 'your-email@example.com' // Your actual email
     ```

### Step 3: Run the Development Server
```bash
npm start
```

The website will open at http://localhost:3000

### Step 4: Build for Production
When ready to deploy:
```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📁 Project Structure

```
Proahead Technologies/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.css
│   │   ├── Services/
│   │   │   ├── Services.jsx
│   │   │   └── Services.css
│   │   ├── Industries/
│   │   │   ├── Industries.jsx
│   │   │   └── Industries.css
│   │   ├── WhyChooseUs/
│   │   │   ├── WhyChooseUs.jsx
│   │   │   └── WhyChooseUs.css
│   │   ├── MissionVision/
│   │   │   ├── MissionVision.jsx
│   │   │   └── MissionVision.css
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   └── ScrollToTop/
│   │       ├── ScrollToTop.jsx
│   │       └── ScrollToTop.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── .gitignore
└── README.md
```

## 🎨 Features

✅ Responsive design (mobile, tablet, desktop)
✅ Smooth animations and transitions
✅ Working contact form with file upload (up to 5MB)
✅ Multiple location information
✅ Service and industry showcase
✅ Mission and vision presentation
✅ Scroll-to-top button
✅ Modern gradient designs

## 🔧 Customization

### Change Colors
Edit `src/index.css` (lines 5-14) to change the color scheme:
```css
:root {
  --primary-color: #0066cc;
  --secondary-color: #00a8e8;
  --accent-color: #ff6b35;
  /* ... */
}
```

### Update Company Information
- Edit `src/components/Contact/Contact.jsx` for contact details
- Edit `src/components/Footer/Footer.jsx` for footer information
- Edit `src/components/About/About.jsx` for company info

### Add/Remove Services
Edit `src/components/Services/Services.jsx` - modify the `services` array

### Add/Remove Industries
Edit `src/components/Industries/Industries.jsx` - modify the `industries` array

## 📧 Contact Form File Support

The contact form accepts these file types:
- PDF (.pdf)
- Word Documents (.doc, .docx)
- Text Files (.txt)
- Images (.jpg, .jpeg, .png)
- Maximum file size: 5MB

## 🌐 Deployment

### Deploy to Netlify (Free)
1. Push your code to GitHub
2. Go to https://netlify.com
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Build command: `npm run build`
6. Publish directory: `build`
7. Click "Deploy"

### Deploy to Vercel (Free)
1. Push your code to GitHub
2. Go to https://vercel.com
3. Import your GitHub repository
4. Vercel will auto-detect React
5. Click "Deploy"

## 🆘 Troubleshooting

**Issue: npm install fails**
- Solution: Make sure you have Node.js 14+ installed
- Check: `node --version`

**Issue: Contact form doesn't send emails**
- Make sure you've configured EmailJS properly
- Check browser console for errors
- Verify your EmailJS credentials

**Issue: Styles not loading**
- Clear browser cache (Ctrl + Shift + Delete)
- Restart development server (Ctrl + C, then `npm start`)

## 📞 Support

For any questions or issues:
- Gurgaon: 9971656854
- Kolkata: 9241024089
- Gaya: 9642 75 2299

---

Built with ❤️ by Proahead Technology Solution Pvt. Ltd.
