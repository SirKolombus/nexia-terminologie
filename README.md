# Terminologie - Nexia# Build Excel add-ins using Office Add-ins Development Kit



Professional terminology dictionary add-in for Microsoft Excel, specifically designed for financial auditing companies.Excel add-ins are integrations built by third parties into Excel by using [Excel JavaScript API](https://learn.microsoft.com/en-us/office/dev/add-ins/reference/overview/excel-add-ins-reference-overview) and [Office Platform capabilities](https://learn.microsoft.com/en-us/office/dev/add-ins/overview/office-add-ins).



## 🎯 Features## How to run this project



- **Hierarchical terminology browser** with expandable categories and subcategories### Prerequisites

- **Smart search functionality** for quick term lookup

- **Detailed modal views** with definitions, descriptions, examples, and related terms- Node.js (the latest LTS version). Visit the [Node.js site](https://nodejs.org/) to download and install the right version for your operating system. To verify that you've already installed these tools, run the commands `node -v` and `npm -v` in your terminal.

- **Professional design** with company brand colors (teal gradient)- Office connected to a Microsoft 365 subscription. You might qualify for a Microsoft 365 E5 developer subscription through the [Microsoft 365 Developer Program](https://developer.microsoft.com/microsoft-365/dev-program), see [FAQ](https://learn.microsoft.com/office/developer-program/microsoft-365-developer-program-faq#who-qualifies-for-a-microsoft-365-e5-developer-subscription-) for details. Alternatively, you can [sign up for a 1-month free trial](https://www.microsoft.com/microsoft-365/try?rtc=1) or [purchase a Microsoft 365 plan](https://www.microsoft.com/microsoft-365/buy/compare-all-microsoft-365-products).

- **Czech language interface** tailored for Czech financial auditing

- **Responsive layout** optimized for Excel task pane### Run the add-in using Office Add-ins Development Kit extension



## 🏗️ Project Structure1. **Open the Office Add-ins Development Kit**

    

```    In the **Activity Bar**, select the **Office Add-ins Development Kit** icon to open the extension.

src/

├── data/1. **Preview Your Office Add-in (F5)**

│   └── terminology.ts          # All terminology data and search functions

├── taskpane/    Select **Preview Your Office Add-in(F5)** to launch the add-in and debug the code. In the Quick Pick menu, select the option **Excel Desktop (Edge Chromium)**.

│   ├── taskpane.html          # Main UI structure

│   ├── taskpane.ts            # Application logic and functionality    The extension then checks that the prerequisites are met before debugging starts. Check the terminal for detailed information if there are issues with your environment. After this process, the Excel desktop application launches and sideloads the add-in.

│   └── taskpane.css           # Professional styling with teal theme

└── commands/1. **Stop Previewing Your Office Add-in**

    ├── commands.html          # Command functions

    └── commands.ts            # Command handlers    Once you are finished testing and debugging the add-in, select **Stop Previewing Your Office Add-in**. This closes the web server and removes the add-in from the registry and cache.

```

## Use the add-in project

## 🚀 Getting Started

The add-in project that you've created contains sample code for a basic task pane add-in.

### Prerequisites

- Node.js (v14 or higher)## Explore the add-in code

- Microsoft Excel (Desktop or Online)

To explore an Office add-in project, you can start with the key files listed below.

### Installation

- The `./manifest.xml` file in the root directory of the project defines the settings and capabilities of the add-in.  <br>You can check whether your manifest file is valid by selecting **Validate Manifest File** option from the Office Add-ins Development Kit.

1. Clone the repository- The `./src/taskpane/taskpane.html` file contains the HTML markup for the task pane.

```bash- The `./src/taskpane/**/*.tsx` file contains the react code and Office JavaScript API code that facilitates interaction between the task pane and the Excel application.

git clone [repository-url]

cd terminologie-nexia## Troubleshooting

```

If you have problems running the add-in, take these steps.

2. Install dependencies

```bash- Close any open instances of Excel.

npm install- Close the previous web server started for the add-in with the **Stop Previewing Your Office Add-in** Office Add-ins Development Kit extension option.

```

If you still have problems, see [troubleshoot development errors](https://learn.microsoft.com//office/dev/add-ins/testing/troubleshoot-development-errors) or [create a GitHub issue](https://aka.ms/officedevkitnewissue) and we'll help you.  

3. Start development server

```bashFor information on running the add-in on Excel on the web, see [Sideload Office Add-ins to Office on the web](https://learn.microsoft.com/office/dev/add-ins/testing/sideload-office-add-ins-for-testing).

npm run dev-server

```For information on debugging on older versions of Office, see [Debug add-ins using developer tools in Microsoft Edge Legacy](https://learn.microsoft.com/office/dev/add-ins/testing/debug-add-ins-using-devtools-edge-legacy).



4. Sideload the add-in in Excel## Make code changes

```bash

npm run start -- desktop --app excelAll the information about Office Add-ins is found in our [official documentation](https://learn.microsoft.com/office/dev/add-ins/overview/office-add-ins). You can also explore more samples in the Office Add-ins Development Kit. Select **View Samples** to see more samples of real-world scenarios.

```

If you edit the manifest as part of your changes, use the **Validate Manifest File** option in the Office Add-ins Development Kit. This shows you errors in the manifest syntax.

## 📚 Adding New Terminology

## Engage with the team

To add new terminology entries, edit `src/data/terminology.ts`:

Did you experience any problems? [Create an issue](https://aka.ms/officedevkitnewissue) and we'll help you out.

### 1. Create Categories

```typescriptWant to learn more about new features and best practices for the Office platform? [Join the Microsoft Office Add-ins community call](https://learn.microsoft.com/office/dev/add-ins/overview/office-add-ins-community-call).

{

  id: "your-category-id",## Copyright

  name: "Category Display Name",

  subcategories: [...]Copyright (c) 2024 Microsoft Corporation. All rights reserved.

}

```## Disclaimer



### 2. Create Subcategories**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**
```typescript
{
  id: "your-subcategory-id", 
  name: "Subcategory Display Name",
  entries: [...]
}
```

### 3. Add Terminology Entries
```typescript
{
  id: "unique-entry-id",
  term: "Term Name",
  definition: "Brief definition",
  description: "Detailed description (optional)",
  examples: ["Example 1", "Example 2"],
  relatedTerms: ["related-term-id"],
  category: "category-id",
  subcategory: "subcategory-id"
}
```

## 🔍 Search Functionality

The search feature automatically searches through:
- Term names
- Definitions
- Detailed descriptions

No need to define keywords - just type and find!

## 🎨 Design Features

- **Company branding** with teal gradient header (#1CB5A6 to #0F9688)
- **Professional typography** using Segoe UI font family
- **Hover effects** with subtle teal accents
- **Responsive design** for different screen sizes
- **Fluent UI integration** following Microsoft design guidelines

## 📋 Available Scripts

- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run dev-server` - Start development server
- `npm run start` - Start debugging in Excel
- `npm run stop` - Stop debugging
- `npm run lint` - Check code quality
- `npm run lint:fix` - Fix linting issues

## 🏢 Built for Financial Auditing

This add-in contains terminology specifically relevant to:
- Audit concepts and procedures
- Risk assessment methodologies
- Financial statements and reporting
- Compliance and regulatory requirements

## 📄 License

MIT License - feel free to modify and use for your organization.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

**Terminologie - Nexia** | Professional terminology management for Excel