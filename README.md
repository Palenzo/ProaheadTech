## Proahead Technology Solution Pvt. Ltd. Website

This is a professional website for **Proahead Technology Solution Pvt. Ltd.** built with React, featuring modern design, responsive layout, and a functional contact form.

### Features

- 🎨 Modern and responsive design
- 📱 Mobile-friendly layout
- 🚀 Smooth animations with AOS
- 📧 Functional contact form with file upload
- 🌐 Multi-page routing
- ✨ Clean and professional UI

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Build for production:**
   ```bash
   npm build
   ```

### Contact Form Configuration

To enable the contact form email functionality, you need to configure EmailJS:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update the following values in `src/components/Contact/Contact.jsx`:
   - `serviceID`: Your EmailJS service ID
   - `templateID`: Your EmailJS template ID
   - `userID`: Your EmailJS user ID
   - `to_email`: Your receiving email address

### EmailJS Template Variables

Your EmailJS template should include these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{phone}}` - Sender's phone
- `{{company}}` - Sender's company
- `{{subject}}` - Message subject
- `{{message}}` - Message content

### Project Structure

```
src/
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── About/
│   ├── Services/
│   ├── Industries/
│   ├── WhyChooseUs/
│   ├── MissionVision/
│   ├── Contact/
│   ├── Footer/
│   └── ScrollToTop/
├── App.js
├── App.css
├── index.js
└── index.css
```

### Technologies Used

- **React** - JavaScript library for building user interfaces
- **React Router** - Routing library for React
- **EmailJS** - Email service for contact form
- **AOS** - Animate On Scroll library
- **Font Awesome** - Icon library
- **CSS3** - Modern styling

### Company Information

- **GSTIN:** 10AAOCP6034A1ZY
- **CIN:** U62099BR2024PTC068496

### Locations

**Gurgaon:**
- F-17, Shiv Mandir road dharam colony palam vihar
- Gurgaon Haryana 122017
- Mobile: 9971656854

**Kolkata:**
- BF Block(Newtown), Action Area I, Newtown
- West Bengal 700156
- Mobile: 9241024089

**Gaya:**
- GB Colony Gaya 823002
- Mobile: 9642 75 2299

### License

© 2025 Proahead Technology Solution Pvt. Ltd. All rights reserved.
