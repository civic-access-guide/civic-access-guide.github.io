const body = document.body;
const pageId = body.dataset.page || "home";
const detailParams = new URLSearchParams(window.location.search);
const languageStorageKey = "rowlandHeightsLanguage";

function getStoredLanguage() {
  try {
    const saved = localStorage.getItem(languageStorageKey);
    return saved === "zh" || saved === "en" ? saved : "en";
  } catch {
    return "en";
  }
}

function storeLanguage(language) {
  try {
    localStorage.setItem(languageStorageKey, language);
  } catch {
    // Local file previews can block storage; in-page switching still works.
  }
}

let currentLanguage = getStoredLanguage();

const navItems = [
  ["home", "index.html"],
  ["basics", "basics.html"],
  ["help", "help.html"],
  ["participate", "participate.html"],
  ["identity", "identity.html"],
  ["followup", "followup.html"],
];

const i18n = {
  en: {
    skip: "Skip to content",
    brandEyebrow: "Rowland Heights",
    siteTitle: "Rowland Heights Civic Access",
    siteSubtitle: "Know what to do, who handles it, and how to follow up in Rowland Heights.",
    print: "Print",
    footer: "This is a civic navigation guide, not legal advice. For urgent danger call 911.",
    lastChecked: "Built for Rowland Heights residents under LA County jurisdiction. Last content check: July 11, 2026.",
    homeLabel: "Home",
    officialLinks: "Official links",
    next: "Next category",
    chooseSubcategory: "Choose what you need",
    openGuide: "Open this guide",
    backToMenu: "Back to this menu",
    inThisCategory: "Related guides",
    overview: "Overview",
    menuOverview: "Start here",
    menuTopics: "Choose a guide",
    nav: {
      home: "Home",
      basics: "Basics",
      help: "Who to contact",
      participate: "Participate",
      identity: "Ways to join",
      followup: "Follow up",
    },
    visual: {
      title: "Start with the right County office",
      center: "Rowland Heights",
      works: "Public Works",
      sheriff: "Sheriff",
      dcba: "Consumer Affairs",
      board: "Board Office",
      caption: "For Rowland Heights, the right answer is usually a County office, not a city hall.",
    },
    pages: {
      home: {
        eyebrow: "Rowland Heights resident guide",
        title: "Know where to go before you start.",
        intro: "This site is a practical navigation tool for Rowland Heights residents. It helps you find the right LA County office, handle everyday setup tasks, participate safely, and track what happens after you submit a request.",
        purposeLabel: "This site helps you:",
        features: [
          ["Find the right office", "Roads, trash, safety, housing, permits, and other local issues are routed to LA County departments."],
          ["Follow daily-life steps", "Phone, bank, taxes, health coverage, and driver's license pages show materials, steps, links, mistakes, and next actions."],
          ["Act and follow up", "Participation and follow-up guides explain what to save, when to check back, and who to contact next."],
        ],
        actions: [["Report a local problem", "help.html"], ["Set up daily life", "basics.html"]],
        sectionEyebrow: "Choose a function",
        sectionTitle: "Use the site by task",
        sectionText: "The five sections below are the main tools in this guide. Pick the closest task and move step by step.",
        categories: [
          ["01", "Set up daily life", "Phone, bank, taxes, health coverage, and California driver's license basics.", "basics.html"],
          ["02", "Report a local problem", "Roads, dumping, permits, safety, housing, and animal issues routed to LA County.", "help.html"],
          ["03", "Take part in public decisions", "Meetings, public comment, elected officials, and voting.", "participate.html"],
          ["04", "Choose how you can participate", "See what U.S. citizens, permanent residents, other residents, and unsure residents can do, and when to be careful.", "identity.html"],
          ["05", "Track what happens next", "Save proof, wait with a date, follow up, and escalate with a clear paper trail.", "followup.html"],
        ],
        notices: [
          ["No status details needed", "The site uses broad resident categories only. It does not ask for A-number, visa type, or documents."],
          ["Local routing matters", "Rowland Heights relies on LA County agencies, so the links avoid nearby city offices that do not handle these services."],
          ["Keep your paper trail", "Screenshots, case numbers, dates, names, and emails make follow-up much easier."],
        ],
      },
      basics: {
        breadcrumb: "Life Basics",
        title: "Phone, bank, taxes, health, and driver's license.",
        intro: "Each item lists what to prepare, the basic steps, official links, common mistakes, and what to do next.",
        nextLabel: "Who handles my problem?",
        nextHref: "help.html",
        items: [
          {
            title: "Get a SIM card or phone plan",
            description: "Start by checking coverage and phone compatibility, then follow the specific carrier route you choose.",
            prepare: ["Unlocked phone if you want to bring your own device.", "IMEI or EID number. Dial *#06# or check phone settings.", "Photo ID if visiting a store.", "Rowland Heights mailing or service address for taxes, coverage, and shipping.", "Payment method for the first month, SIM, activation, or taxes.", "If keeping an old number: old carrier account number, transfer PIN, billing ZIP code, and active old service.", "If applying for LifeLine: proof of income or benefit such as Medi-Cal, CalFresh/SNAP, SSI, housing assistance, or another qualifying document."],
            terms: [
              ["Prepaid", "Pay before using service. It is usually simpler for a first phone number, has no annual service contract, and often avoids a credit check. Carrier pages may call it Prepaid or Pay as you go."],
              ["Bring your own phone/device", "Use a phone you already own instead of buying a new phone from the carrier. On carrier pages, look for Bring your own phone, Bring your own device, BYOD, Keep your phone, or Check compatibility."],
              ["SIM / eSIM", "SIM is the chip or digital phone profile that connects your phone to the carrier. Choose eSIM only if the carrier compatibility check says your phone supports it; otherwise use a physical SIM or a store visit."],
            ],
            steps: ["Compare coverage and phone compatibility before choosing a plan."],
            stepGroups: [
              {
                title: "AT&T: use your current phone with a pay-first plan",
                steps: [
                  "Open <a href=\"https://www.att.com/maps/wireless-coverage.html\" target=\"_blank\" rel=\"noreferrer\">AT&T's coverage map</a>. Enter the Rowland Heights address, then check home, work, school, and commute routes.",
                  "Open <a href=\"https://www.att.com/wireless/byod/\" target=\"_blank\" rel=\"noreferrer\">AT&T Bring Your Own Device</a>. On the page, look for button text like Check compatibility, Bring your own device, or Get started, then enter the IMEI or EID. Do not start from Shop phones if you are not buying a new phone.",
                  "Open <a href=\"https://www.att.com/prepaid/\" target=\"_blank\" rel=\"noreferrer\">AT&T Prepaid</a>. Look for Prepaid phone plans, Shop prepaid plans, or Get started. Choose a phone plan, then choose Bring your own device, eSIM, or physical SIM based on the compatibility result.",
                  "At checkout, enter the Rowland Heights service or mailing address, payment method, and old carrier account number plus transfer PIN only if you are keeping your old number.",
                  "After AT&T issues the SIM/eSIM, finish activation from the AT&T order page, store, or app, then test calls, SMS, mobile data, voicemail, and bank verification texts."
                ],
              },
              {
                title: "T-Mobile: use your current phone with a pay-first plan",
                steps: [
                  "Open <a href=\"https://www.t-mobile.com/coverage/coverage-map\" target=\"_blank\" rel=\"noreferrer\">T-Mobile's coverage map</a>. Enter the Rowland Heights address and check the places you use most.",
                  "Open <a href=\"https://www.t-mobile.com/resources/bring-your-own-phone\" target=\"_blank\" rel=\"noreferrer\">T-Mobile Bring Your Own Phone</a>. Look for Check compatibility, Bring your own phone, or IMEI checker, then enter the IMEI. Avoid Shop phones if you are using your existing phone.",
                  "Open <a href=\"https://prepaid.t-mobile.com/prepaid-plans\" target=\"_blank\" rel=\"noreferrer\">T-Mobile Prepaid plans</a>. Stay in Prepaid phone plans, not home internet, tablet, or watch plans. Choose a plan, then choose SIM card, eSIM, or Bring your own phone if offered.",
                  "If transferring an old number, keep old service active and enter the old carrier account number, transfer PIN, and billing ZIP code only when the T-Mobile flow asks for them.",
                  "Activate through T-Mobile's official checkout, account, app, or store flow. Before leaving the page or store, test calls, texts, data, voicemail, and two-factor verification messages."
                ],
              },
              {
                title: "Verizon: use your current phone with a pay-first plan",
                steps: [
                  "Open <a href=\"https://www.verizon.com/coverage-map/\" target=\"_blank\" rel=\"noreferrer\">Verizon's coverage map</a>. Enter the Rowland Heights address and check the places where you need service most.",
                  "If using your own phone, open <a href=\"https://www.verizon.com/support/bring-your-own-device-faqs/\" target=\"_blank\" rel=\"noreferrer\">Verizon Bring Your Own Device</a> first so you know what BYOD means on Verizon. Then look for Bring your own device, Check compatibility, Keep your phone, or IMEI check.",
                  "Open <a href=\"https://www.verizon.com/prepaid/plans/phone-plans/\" target=\"_blank\" rel=\"noreferrer\">Verizon Prepaid phone plans</a>. Stay on Phone plans and Prepaid. Do not choose a new phone or device financing if you only want a phone number for your existing phone.",
                  "During checkout, choose eSIM only if Verizon confirms the phone supports it. Otherwise order a physical SIM or visit a Verizon store.",
                  "When the SIM/eSIM is ready, finish activation through Verizon's official order, account, app, or store process, then test calls, texts, data, voicemail, and verification texts."
                ],
              },
              {
                title: "California LifeLine if cost is the main barrier",
                steps: [
                  "Open <a href=\"https://www.californialifeline.com/en\" target=\"_blank\" rel=\"noreferrer\">California LifeLine</a> and check eligibility based on income or qualifying benefit programs.",
                  "Open <a href=\"https://www.lifelinesupport.org/companies-near-me/\" target=\"_blank\" rel=\"noreferrer\">LifeLine companies near me</a>, enter the Rowland Heights ZIP code, and choose an approved phone company.",
                  "Apply through the approved company or the LifeLine flow they direct you to. Prepare benefit proof or income proof before starting so the application does not stall.",
                  "After approval, save the application confirmation, company name, phone number, plan details, renewal date, and customer service contact.",
                  "If denied or no reply arrives, follow the notice instructions first, then contact the phone company or California LifeLine support with the confirmation number."
                ],
              },
            ],
            mistakes: ["Buying a SIM before checking coverage and IMEI compatibility.", "Cancelling the old carrier before a number transfer is complete.", "Choosing postpaid when you only wanted a basic prepaid plan.", "Forgetting transfer PIN, old account number, or billing ZIP code when keeping a number.", "Assuming eSIM works on every phone.", "Using another person's phone account as the only number for banks, DMV, or County forms."],
            next: "After the number works, update banks, DMV, health coverage, tax accounts, school, employer, and County forms. Keep a small offline contact sheet with your carrier login, PIN reminder, plan due date, and emergency contacts.",
            links: [["AT&T Coverage", "https://www.att.com/maps/wireless-coverage.html"], ["AT&T Prepaid", "https://www.att.com/prepaid/"], ["AT&T Bring Your Own Device", "https://www.att.com/wireless/byod/"], ["T-Mobile Coverage", "https://www.t-mobile.com/coverage/coverage-map"], ["T-Mobile Prepaid", "https://prepaid.t-mobile.com/prepaid-plans"], ["T-Mobile Bring Your Own Phone", "https://www.t-mobile.com/resources/bring-your-own-phone"], ["Verizon Coverage", "https://www.verizon.com/coverage-map/"], ["Verizon Prepaid", "https://www.verizon.com/prepaid/plans/phone-plans/"], ["Verizon Bring Your Own Device", "https://www.verizon.com/support/bring-your-own-device-faqs/"], ["California LifeLine", "https://www.californialifeline.com/en"], ["LifeLine companies near me", "https://www.lifelinesupport.org/companies-near-me/"]],
          },
          {
            title: "Bank account",
            description: "Choose a checking account, understand the fees before applying, and save the account details after approval.",
            prepare: ["Photo ID or the bank's accepted alternative ID.", "Rowland Heights residential address, mailing address if different, phone number, and email.", "SSN or ITIN if the bank asks for it during the application.", "Date of birth and basic employment or income information if the form asks.", "Opening deposit or transfer source if the account requires one.", "If opening in branch, bring proof of address if your ID does not show the current address."],
            terms: [
              ["Checking account", "An everyday bank account for paychecks, debit card spending, bill pay, rent, and transfers. It is different from a savings account, which is mainly for storing money."],
              ["Monthly maintenance fee", "A monthly charge. Many accounts show ways to avoid it, such as direct deposit, a minimum balance, student age, or another qualifying relationship. Read this before clicking Open now."],
              ["Overdraft", "When a transaction tries to spend more than the available balance. Some accounts allow this with a fee; some decline the transaction. Look for overdraft fee, overdraft protection, or no overdraft fee."],
              ["Direct deposit", "Money sent electronically by an employer, government benefit, or other payer. Banks often use direct deposit to waive fees or unlock account features."],
            ],
            steps: ["Compare account type, fees, and required documents before opening."],
            stepGroups: [
              {
                title: "Chase: open a checking account online or in branch",
                steps: [
                  "Open <a href=\"https://www.chase.com/personal/checking\" target=\"_blank\" rel=\"noreferrer\">Chase checking accounts</a>. Stay in Checking Accounts, not credit cards, savings, auto, or investing.",
                  "Use Compare checking accounts or the All / Everyday section. For a basic first account, compare Chase Total Checking and Chase Secure Banking before choosing.",
                  "On the account card, first read Monthly Service Fee, then click Avoid fee and Account details. Check the fee, ways to avoid it, overdraft rules, ATM access, and whether the account supports checks.",
                  "If the account fits, click Open now. Fill in name, date of birth, address, phone, email, and SSN/ITIN if Chase asks for it. If the form does not fit your documents, use <a href=\"https://locator.chase.com/\" target=\"_blank\" rel=\"noreferrer\">Find ATM or branch</a> or <a href=\"https://www.chase.com/digital/customer-service/helpful-tips/personal-banking/branch/schedule-meeting\" target=\"_blank\" rel=\"noreferrer\">Schedule a meeting</a> instead of guessing.",
                  "After approval, save the fee schedule, account agreement, routing number, account number, online banking login, debit card arrival or pickup information, and the branch or support contact."
                ],
              },
              {
                title: "Bank of America: enter ZIP first, then choose an Advantage Banking option",
                steps: [
                  "Open <a href=\"https://www.bankofamerica.com/deposits/checking/advantage-banking/\" target=\"_blank\" rel=\"noreferrer\">Bank of America Advantage Banking</a>. The page may ask for your ZIP code first so it can show local rate and fee information.",
                  "Use the Rowland Heights ZIP code, then choose Los Angeles County if the page asks for county. Do this before comparing account details.",
                  "Compare the Advantage Banking options. Look for words such as SafeBalance, Plus, Relationship, monthly maintenance fee, minimum balance, direct deposit, overdraft, and debit card.",
                  "Click Open now only after reading the fee details. If you are unsure which option fits, use <a href=\"https://secure.bankofamerica.com/secure-mycommunications/public/appointments/\" target=\"_blank\" rel=\"noreferrer\">Schedule an appointment</a> or <a href=\"https://locators.bankofamerica.com/\" target=\"_blank\" rel=\"noreferrer\">Find a location</a>.",
                  "After approval, save the account agreement, fee schedule, routing number, account number, online banking login, debit card delivery or pickup information, and the banker or support contact."
                ],
              },
            ],
            mistakes: ["Clicking Open now before reading the monthly maintenance fee and how to avoid it.", "Choosing a savings account when you need a checking account for debit card spending, rent, bills, or direct deposit.", "Ignoring overdraft rules and then getting fees or declined payments.", "Using cash apps as the only banking tool instead of keeping bank records.", "Entering a fake address, guessed SSN/ITIN, or document information you cannot verify.", "Throwing away account agreements, fee schedules, debit card mail, or bank notices."],
            next: "Turn on text or email alerts for deposits, low balance, debit card spending, and suspicious transactions. Set up direct deposit only after the account is fully approved and you have saved the routing and account numbers.",
            links: [["Chase Checking Accounts", "https://www.chase.com/personal/checking"], ["Chase Total Checking", "https://www.chase.com/personal/checking/total-checking"], ["Chase Branch Locator", "https://locator.chase.com/"], ["Chase Schedule a Meeting", "https://www.chase.com/digital/customer-service/helpful-tips/personal-banking/branch/schedule-meeting"], ["Bank of America Advantage Banking", "https://www.bankofamerica.com/deposits/checking/advantage-banking/"], ["Bank of America Schedule Appointment", "https://secure.bankofamerica.com/secure-mycommunications/public/appointments/"], ["Bank of America Locations", "https://locators.bankofamerica.com/"], ["LA County Financial Empowerment", "https://dcba.lacounty.gov/financial-empowerment/"]],
          },
          {
            title: "Taxes",
            description: "Gather documents, file federal and California returns, then pay IRS or FTB separately if money is owed.",
            prepare: ["W-2, 1099, 1099-K, 1099-NEC, unemployment, interest, cash-income, gig-work, and other income records.", "SSN or ITIN for you, spouse if filing jointly, and dependents listed on the return.", "Bank routing and account number for direct deposit or tax payment.", "Last year's return, AGI, and IRS self-select PIN if you filed before.", "Health coverage form 1095-A if you used Covered California or another Marketplace plan.", "Childcare, education, donation, retirement, self-employment, mileage, rent, or other credit/deduction records if they apply.", "IRS or FTB letters, prior payment confirmations, estimated tax records, and extension confirmations."],
            terms: [
              ["Federal return vs. California return", "Most Rowland Heights residents who must file need a federal return for IRS and a California return for FTB. These are separate systems; submitting one does not automatically submit or pay the other."],
              ["Refund vs. balance due", "Refund means the government owes you money. Balance due means you owe money. If you owe, you still need to pay separately after filing unless the filing software schedules payment."],
              ["Extension", "An extension gives more time to file the return, not more time to pay. If you owe, pay by the deadline to reduce penalties and interest."],
              ["VITA / Free File / CalFile", "VITA is free help from IRS-certified volunteers. IRS Free File is for federal filing. FTB CalFile is a free California filing tool for eligible taxpayers."],
            ],
            steps: ["Use the official document checklist, file federal and California returns, then pay any balance due through IRS and FTB payment pages."],
            stepGroups: [
              {
                title: "1. Gather documents before opening any tax software",
                steps: [
                  "Open the IRS <a href=\"https://www.irs.gov/filing/gather-your-documents\" target=\"_blank\" rel=\"noreferrer\">Gather your documents</a> page and use it as the checklist. Put W-2, 1099, 1099-K, 1099-NEC, unemployment, bank interest, cash-income, gig-work, and self-employment records in one folder.",
                  "If you are not sure whether you must file, open IRS <a href=\"https://www.irs.gov/how-to-file-your-taxes-step-by-step\" target=\"_blank\" rel=\"noreferrer\">How to file your taxes: step by step</a> and use the Check if you need to file section.",
                  "If you need an ITIN, open IRS <a href=\"https://www.irs.gov/forms-pubs/about-form-w-7\" target=\"_blank\" rel=\"noreferrer\">Form W-7</a> and read the current instructions before filing; do not guess an SSN or ITIN."
                ],
              },
              {
                title: "2. Open the official forms and PDFs only when you need them",
                steps: [
                  "For the federal return, open IRS <a href=\"https://www.irs.gov/forms-instructions\" target=\"_blank\" rel=\"noreferrer\">Forms and Instructions</a>. The common PDF is <a href=\"https://www.irs.gov/pub/irs-pdf/f1040.pdf\" target=\"_blank\" rel=\"noreferrer\">Form 1040 PDF</a>, with <a href=\"https://www.irs.gov/pub/irs-pdf/i1040gi.pdf\" target=\"_blank\" rel=\"noreferrer\">Form 1040 instructions PDF</a>.",
                  "If you pay estimated taxes, open <a href=\"https://www.irs.gov/pub/irs-pdf/f1040es.pdf\" target=\"_blank\" rel=\"noreferrer\">IRS Form 1040-ES PDF</a>. If you cannot pay the full amount and need a plan, note <a href=\"https://www.irs.gov/pub/irs-pdf/f9465.pdf\" target=\"_blank\" rel=\"noreferrer\">IRS Form 9465 PDF</a> but usually start with the IRS online payment plan page first.",
                  "For the California return, open FTB <a href=\"https://www.ftb.ca.gov/forms/index.html\" target=\"_blank\" rel=\"noreferrer\">Forms and Publications</a>. The common resident PDF is <a href=\"https://www.ftb.ca.gov/forms/2025/2025-540.pdf\" target=\"_blank\" rel=\"noreferrer\">California Form 540 PDF</a>, with the <a href=\"https://www.ftb.ca.gov/forms/2025/2025-540-booklet.html\" target=\"_blank\" rel=\"noreferrer\">Form 540 instruction booklet</a>.",
                  "Do not start with PDFs if you are using VITA, IRS Free File, CalFile, or paid software. Use PDFs to understand forms or paper-file, while the filing tool should generate the final return."
                ],
              },
              {
                title: "3. Choose how to file",
                steps: [
                  "For free in-person or assisted help in LA County, open LA County DCBA <a href=\"https://dcba.lacounty.gov/volunteer-income-tax-assistance/\" target=\"_blank\" rel=\"noreferrer\">VITA</a>, then click Find Los Angeles County locations or Schedule an Appointment. Bring IDs, income forms, prior return, and bank routing/account numbers.",
                  "For free federal online filing, open <a href=\"https://www.irs.gov/e-file-do-your-taxes-for-free\" target=\"_blank\" rel=\"noreferrer\">IRS Free File</a>. Start from IRS.gov, choose Guided Tax Software or Fillable Forms, and save the IRS acceptance email.",
                  "For California online filing, open <a href=\"https://www.ftb.ca.gov/file/ways-to-file/online/calfile/index.asp\" target=\"_blank\" rel=\"noreferrer\">FTB CalFile</a>. If eligible, create or log in to MyFTB and file the California return. Save the FTB confirmation.",
                  "If your return is complex, use a qualified preparer. Make sure the preparer signs the return and gives you a full copy before you pay."
                ],
              },
              {
                title: "4. If you owe IRS money, pay federal tax separately",
                steps: [
                  "Open <a href=\"https://www.irs.gov/payments/direct-pay\" target=\"_blank\" rel=\"noreferrer\">IRS Direct Pay</a> and click Pay individual tax. Use this for federal balance due, estimated tax, or other individual tax payments.",
                  "Choose the payment reason carefully, such as Balance Due for a filed return or Estimated Tax for quarterly estimated payments. Choose the correct tax year; paying the wrong year can create follow-up problems.",
                  "Enter bank routing/account information, verify identity with prior return information when asked, review the amount and date, then submit. Save or screenshot the IRS confirmation number.",
                  "If you cannot pay in full, open the IRS <a href=\"https://www.irs.gov/payments/online-payment-agreement-application\" target=\"_blank\" rel=\"noreferrer\">online payment agreement</a> page. You still should file on time even if you need a payment plan."
                ],
              },
              {
                title: "5. If you owe California money, pay FTB separately",
                steps: [
                  "Open FTB <a href=\"https://www.ftb.ca.gov/pay/index.html\" target=\"_blank\" rel=\"noreferrer\">Pay</a>. Use Bank account / Web Pay for a free bank-account payment when possible; credit card payments may have fees.",
                  "Choose the right tax year and payment type. FTB warns that separate tax years should be paid separately, so do not combine different years into one payment.",
                  "Submit the payment and save the FTB confirmation number, payment date, tax year, and amount. This is separate from IRS payment confirmation.",
                  "If you cannot pay the full California amount, use the FTB Pay page and choose payment plan, or contact FTB before ignoring the balance."
                ],
              },
              {
                title: "6. After filing",
                steps: [
                  "Save federal and California accepted returns, e-file acceptance emails, AGI, refund or balance due, IRS payment confirmation, FTB payment confirmation, and every notice letter.",
                  "For federal refund status, use IRS <a href=\"https://www.irs.gov/refunds\" target=\"_blank\" rel=\"noreferrer\">Refunds / Where's My Refund</a>. For California refund status, use FTB <a href=\"https://www.ftb.ca.gov/refund/index.asp\" target=\"_blank\" rel=\"noreferrer\">Where's My Refund</a>.",
                  "If a notice arrives, compare the notice to the return and payment confirmations before responding. Do not ignore IRS or FTB letters."
                ],
              },
            ],
            mistakes: ["Filing the federal return but forgetting the California return.", "Filing the return but not separately paying IRS or FTB when the return shows a balance due.", "Thinking an extension gives more time to pay.", "Using a random tax website instead of starting from IRS.gov, FTB.ca.gov, or LA County VITA.", "Missing W-2, 1099, 1099-K, cash income, gig income, or unemployment income.", "Paying the wrong tax year or paying IRS when the balance is actually owed to FTB, or the reverse.", "Not saving e-file acceptance emails and payment confirmation numbers."],
            next: "Keep a tax folder for forms, returns, IRS and FTB letters, payment confirmations, refund confirmations, AGI, and the next filing deadline. If you owed money this year, check whether you need withholding changes or estimated payments next year.",
            links: [["IRS Gather Documents", "https://www.irs.gov/filing/gather-your-documents"], ["IRS Free File", "https://www.irs.gov/e-file-do-your-taxes-for-free"], ["IRS Form 1040 PDF", "https://www.irs.gov/pub/irs-pdf/f1040.pdf"], ["IRS Form 1040 Instructions PDF", "https://www.irs.gov/pub/irs-pdf/i1040gi.pdf"], ["IRS Direct Pay", "https://www.irs.gov/payments/direct-pay"], ["IRS Payment Plan", "https://www.irs.gov/payments/online-payment-agreement-application"], ["FTB Forms", "https://www.ftb.ca.gov/forms/index.html"], ["California Form 540 PDF", "https://www.ftb.ca.gov/forms/2025/2025-540.pdf"], ["FTB Pay", "https://www.ftb.ca.gov/pay/index.html"], ["FTB CalFile", "https://www.ftb.ca.gov/file/ways-to-file/online/calfile/index.asp"], ["LA County VITA", "https://dcba.lacounty.gov/volunteer-income-tax-assistance/"]],
          },
          {
            title: "Health coverage",
            description: "Choose the right route before applying: Covered California private plans, Medi-Cal, Medicare, or free enrollment help.",
            prepare: ["Household size, estimated yearly income, tax filing information, and any job-based insurance offer or loss-of-coverage notice.", "Rowland Heights address, mailing address if different, phone number, email, and preferred language.", "Social Security numbers for applicants who have them; immigration documents only for people who are applying and only when the official application asks.", "Current doctors, clinics, prescriptions, pregnancy needs, disability needs, and urgent care needs.", "Existing insurance card, Medi-Cal Notice of Action, BenefitsCal login, Medicare card, or renewal letters if you already have coverage.", "Payment method if choosing a private Covered California plan, because the first premium is usually paid to the insurance company after enrollment."],
            terms: [
              ["Covered California", "California's official marketplace for private health plans. Use it when you need to buy insurance yourself, compare companies by ZIP code, and check whether you qualify for financial help."],
              ["Medi-Cal", "California Medicaid. It gives free or low-cost coverage to people who qualify. Enrollment is year-round, and the application can be started through BenefitsCal or Covered California."],
              ["Bronze / Silver / Gold / Platinum", "Covered California plan levels. Bronze usually has lower monthly premiums and higher costs when you get care. Gold and Platinum usually cost more each month but less when you use care. Silver can be important when you qualify for extra cost reductions."],
              ["HMO / PPO / EPO", "Network rules. HMO usually requires a network and primary doctor; PPO is usually more flexible but can cost more; EPO is in-network focused and may allow specialists without referrals. Always check doctors and prescriptions before enrolling."],
              ["Medicare", "Federal health insurance mainly for people 65 or older, and some people with disability, ESRD, or ALS. If this applies, start at Medicare.gov before using Covered California."],
            ],
            steps: ["Start with the route that fits your situation, then compare plans or apply through the official site."],
            stepGroups: [
              {
                title: "1. Start here: choose the correct route",
                steps: [
                  "If you are 65 or older, or may qualify because of disability, ESRD, or ALS, open <a href=\"https://www.medicare.gov/basics/get-started-with-medicare\" target=\"_blank\" rel=\"noreferrer\">Medicare: Get started</a> first. Medicare is a different system from Covered California.",
                  "If income is limited, open <a href=\"https://www.dhcs.ca.gov/medi-cal/\" target=\"_blank\" rel=\"noreferrer\">Medi-Cal</a> and then <a href=\"https://www.dhcs.ca.gov/medi-cal/apply/\" target=\"_blank\" rel=\"noreferrer\">Apply for Medi-Cal</a>. Medi-Cal can be applied for online, by phone, by mail, or at a county office.",
                  "If you need to buy private insurance yourself, open <a href=\"https://apply.coveredca.com/lw-shopandcompare/\" target=\"_blank\" rel=\"noreferrer\">Covered California Shop and Compare</a>. Enter ZIP 91748 or your Rowland Heights ZIP, Los Angeles County, household size, income, age, and coverage year.",
                  "If you are not sure, start with <a href=\"https://www.coveredca.com/get-started/\" target=\"_blank\" rel=\"noreferrer\">Covered California Get Started</a> or use <a href=\"https://www.coveredca.com/support/find-an-enroller/\" target=\"_blank\" rel=\"noreferrer\">Find an Enroller</a> so a certified helper can tell you whether the route is Covered California, Medi-Cal, or another program."
                ],
              },
              {
                title: "2. Covered California private plans: compare companies and plan types",
                steps: [
                  "In <a href=\"https://apply.coveredca.com/lw-shopandcompare/\" target=\"_blank\" rel=\"noreferrer\">Shop and Compare</a>, use the Rowland Heights ZIP first. The companies shown there are the correct companies for your ZIP and year; do not rely on a generic internet ranking.",
                  "On each plan card, compare the insurance company name, metal level, monthly premium, deductible, out-of-pocket maximum, office visit cost, prescription cost, and whether the plan is HMO, PPO, or EPO.",
                  "If the metal levels are confusing, open the official pages for <a href=\"https://www.coveredca.com/health/coverage-levels/bronze/\" target=\"_blank\" rel=\"noreferrer\">Bronze</a>, <a href=\"https://www.coveredca.com/health/coverage-levels/silver/\" target=\"_blank\" rel=\"noreferrer\">Silver</a>, <a href=\"https://www.coveredca.com/health/coverage-levels/gold/\" target=\"_blank\" rel=\"noreferrer\">Gold</a>, and <a href=\"https://www.coveredca.com/health/coverage-levels/platinum/\" target=\"_blank\" rel=\"noreferrer\">Platinum</a>. Do this before choosing only by the monthly price.",
                  "Before clicking enroll, open the plan's provider directory and drug list from the plan card. Search your doctor, clinic, hospital, and medication names. If you cannot confirm them, use <a href=\"https://www.coveredca.com/support/find-an-enroller/\" target=\"_blank\" rel=\"noreferrer\">Find an Enroller</a> or call Covered California before enrolling.",
                  "When ready, use <a href=\"https://www.coveredca.com/get-started/\" target=\"_blank\" rel=\"noreferrer\">Start Online Application</a>. After approval and plan selection, pay the first premium to the insurance company. Save the application ID, plan name, company name, payment confirmation, and start date."
                ],
              },
              {
                title: "3. Medi-Cal: apply first, then choose a health plan if approved",
                steps: [
                  "Open <a href=\"https://www.dhcs.ca.gov/medi-cal/apply/\" target=\"_blank\" rel=\"noreferrer\">DHCS Apply for Medi-Cal</a>. Choose <a href=\"https://benefitscal.com/\" target=\"_blank\" rel=\"noreferrer\">BenefitsCal</a> if you also need to manage county benefits, or choose the Covered California application if you are unsure whether you qualify for Medi-Cal or a private plan.",
                  "If you prefer phone or in-person help, use <a href=\"https://www.dhcs.ca.gov/services/medi-cal-resources/county-offices/\" target=\"_blank\" rel=\"noreferrer\">Find Your County Medi-Cal Office</a> and search Los Angeles County.",
                  "After submitting, save the confirmation and watch for mail or account messages. DHCS says review can take up to 45 days, and the county may ask for more information.",
                  "If approved, you should receive a Notice of Action and a Benefits Identification Card (BIC). Open <a href=\"https://www.dhcs.ca.gov/medi-cal/use/\" target=\"_blank\" rel=\"noreferrer\">Use Your Medi-Cal</a> so you know when you can start using benefits and whether you need to join a Medi-Cal health plan.",
                  "To compare Medi-Cal health plans and provider networks, use <a href=\"https://www.healthcareoptions.dhcs.ca.gov/en\" target=\"_blank\" rel=\"noreferrer\">Health Care Options</a>. Use the health plan materials, provider search, and enrollment pages instead of guessing from company names."
                ],
              },
              {
                title: "4. Medicare: compare Medicare plans separately",
                steps: [
                  "Open <a href=\"https://www.medicare.gov/basics/get-started-with-medicare\" target=\"_blank\" rel=\"noreferrer\">Get started with Medicare</a> and choose the path that matches your situation, such as getting Social Security before 65 or signing up after 65.",
                  "For Medicare Advantage, Part D drug plans, or Medigap comparisons, open <a href=\"https://www.medicare.gov/plan-compare/\" target=\"_blank\" rel=\"noreferrer\">Medicare Plan Compare</a>. Enter your ZIP code, medications, pharmacy, and doctors before choosing a plan.",
                  "Do not assume a Covered California plan is the right route after age 65. If you are unsure, talk to Medicare, Social Security, or a certified counselor before cancelling or buying coverage."
                ],
              },
              {
                title: "5. Get free help before submitting if you are stuck",
                steps: [
                  "Use <a href=\"https://www.coveredca.com/support/find-an-enroller/\" target=\"_blank\" rel=\"noreferrer\">Covered California Find an Enroller</a>, enter the Rowland Heights ZIP code, and choose a certified counselor or agent. This help is free through Covered California.",
                  "Covered California phone help is (800) 300-1506. For Mandarin, call (800) 300-1533. For Cantonese, call (800) 339-8938. These numbers are listed on the official Covered California site.",
                  "If the issue is Medi-Cal after you submitted, sign in to <a href=\"https://benefitscal.com/\" target=\"_blank\" rel=\"noreferrer\">BenefitsCal</a> or contact the <a href=\"https://www.dhcs.ca.gov/services/medi-cal-resources/county-offices/\" target=\"_blank\" rel=\"noreferrer\">Los Angeles County Medi-Cal office</a> with your case number.",
                  "If you need care before the insurance card arrives, do not ignore urgent symptoms. Use emergency services for emergencies, and ask the clinic or hospital financial office what coverage or county assistance options apply while your application is pending."
                ],
              },
            ],
            mistakes: ["Choosing only by the cheapest monthly premium without checking deductible, out-of-pocket maximum, doctors, hospitals, and prescriptions.", "Assuming a company shown for another city or another year is available for Rowland Heights.", "Using Covered California when Medicare is the correct starting point.", "Ignoring Medi-Cal or Covered California letters, renewal notices, or requests for proof.", "Not paying the first premium for a private plan after enrollment.", "Entering immigration or SSN details for family members who are not applying when the official application does not ask for them.", "Cancelling old coverage before the new start date is confirmed."],
            next: "Save the application ID, case number, plan name, insurance company, member ID, premium payment confirmation, start date, renewal date, doctor network proof, and prescription proof. Put renewal reminders on a calendar and update income or household changes through the official account.",
            links: [["Covered California Get Started", "https://www.coveredca.com/get-started/"], ["Covered California Shop and Compare", "https://apply.coveredca.com/lw-shopandcompare/"], ["Covered California Find an Enroller", "https://www.coveredca.com/support/find-an-enroller/"], ["Covered California Bronze", "https://www.coveredca.com/health/coverage-levels/bronze/"], ["Covered California Silver", "https://www.coveredca.com/health/coverage-levels/silver/"], ["Covered California Gold", "https://www.coveredca.com/health/coverage-levels/gold/"], ["Covered California Platinum", "https://www.coveredca.com/health/coverage-levels/platinum/"], ["Medi-Cal", "https://www.dhcs.ca.gov/medi-cal/"], ["Apply for Medi-Cal", "https://www.dhcs.ca.gov/medi-cal/apply/"], ["Use Your Medi-Cal", "https://www.dhcs.ca.gov/medi-cal/use/"], ["BenefitsCal", "https://benefitscal.com/"], ["County Medi-Cal Office", "https://www.dhcs.ca.gov/services/medi-cal-resources/county-offices/"], ["Health Care Options", "https://www.healthcareoptions.dhcs.ca.gov/en"], ["Medicare Get Started", "https://www.medicare.gov/basics/get-started-with-medicare"], ["Medicare Plan Compare", "https://www.medicare.gov/plan-compare/"]],
          },
          {
            title: "Driver's license",
            description: "Choose the right DMV license path first, then prepare documents, start the online application, test, and track the mailed card.",
            prepare: ["Decide whether you need a regular Class C driver license, a REAL ID driver license, an AB 60 driver license, or a transfer route from another state or country.", "Identity documents. Use the DMV document checklist or documents list before going to an office.", "California residency proof showing your current address. REAL ID usually requires two residency documents; other license paths may require at least one.", "Social Security number if you have one and DMV requires it; AB 60 is for people who cannot provide satisfactory proof of legal presence but meet DMV identity and California residency requirements.", "A DMV online account, email, and phone for two-factor authentication if starting the DL/ID application online.", "If you will take a drive test: a properly registered and insured vehicle, proof of financial responsibility, and a licensed driver who can take you to the test when required.", "If your name changed, bring original or certified name-change documents such as marriage, court, adoption, or divorce records."],
            terms: [
              ["Class C", "The regular noncommercial California license for most personal cars. This is the normal path for everyday driving."],
              ["REAL ID", "A driver license or ID that is also accepted for federal identification, such as domestic flights and certain federal facilities. It requires stricter document proof and has a bear-and-star marking."],
              ["Federal non-compliant", "A California license that lets you drive but is not a REAL ID. It is not the same as AB 60; some people with legal presence choose this if they do not need REAL ID."],
              ["AB 60", "A California driver license path for people who cannot provide satisfactory proof of legal presence but can meet DMV identity and California residency requirements. AB 60 cannot be a REAL ID."],
              ["Instruction permit", "A permit that lets you practice before the drive test. Adults who have never had a license may need this before taking the behind-the-wheel test."],
            ],
            steps: ["Use the DMV page that matches your situation. Do the online application first, then finish documents, photo, fee, tests, and card tracking through DMV."],
            stepGroups: [
              {
                title: "1. Start by choosing the right DMV path",
                steps: [
                  "Open DMV <a href=\"https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/driver-licenses-dl/\" target=\"_blank\" rel=\"noreferrer\">Driver's Licenses</a>. Read the over-18 sections: no prior license, license from another state, license from another country, and legal-presence/AB 60 situations.",
                  "If you want a license that can also be used as federal ID, open DMV <a href=\"https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/real-id/\" target=\"_blank\" rel=\"noreferrer\">REAL ID</a>. On that page, start with Create your checklist before the application.",
                  "If you cannot provide satisfactory proof of legal presence, open DMV <a href=\"https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/assembly-bill-ab-60-driver-licenses/\" target=\"_blank\" rel=\"noreferrer\">AB 60 Driver's Licenses</a> and the <a href=\"https://www.dmv.ca.gov/portal/assembly-bill-ab-60-wizard/\" target=\"_blank\" rel=\"noreferrer\">AB 60 Wizard</a> before booking anything.",
                  "If you have a driver's license from another country, still use the DMV driver's license page. DMV says to follow the same application process as another-state applicants, and you will also need a drive test for an original California license."
                ],
              },
              {
                title: "2. Prepare the exact documents before the DMV office visit",
                steps: [
                  "For REAL ID, open the <a href=\"https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/real-id/real-id-checklist/\" target=\"_blank\" rel=\"noreferrer\">REAL ID Checklist</a>. Select your identity document, name-change documents if needed, and two residency documents. Bring the original documents to DMV, not only uploads or screenshots.",
                  "For a federal non-compliant license with legal presence, open the DMV <a href=\"https://www.dmv.ca.gov/portal/file/federal-non-compliant-dl-id-card-documents-list-pdf/\" target=\"_blank\" rel=\"noreferrer\">Federal Non-Compliant DL/ID documents list PDF</a> and check which original or certified identity/legal-presence document fits your situation.",
                  "For address proof, open the DMV <a href=\"https://www.dmv.ca.gov/portal/file/residency-documents-list-pdf/\" target=\"_blank\" rel=\"noreferrer\">Residency Documents List PDF</a>. Use documents with your first and last name and current California mailing address, such as lease, utility bill, bank record, tax return, insurance document, school document, medical document, or government letter.",
                  "For AB 60, use the <a href=\"https://www.dmv.ca.gov/portal/assembly-bill-ab-60-wizard/\" target=\"_blank\" rel=\"noreferrer\">AB 60 Wizard</a> and the <a href=\"https://www.dmv.ca.gov/portal/driver-education-and-safety/educational-materials/documents/\" target=\"_blank\" rel=\"noreferrer\">Driver License Document Resource Portal</a>. If you do not have listed documents, read the secondary review path before the appointment.",
                  "If your current full name does not match your identity document, bring the full paper trail for each legal name change. Do not assume DMV will accept an unofficial translation, photocopy, or nickname."
                ],
              },
              {
                title: "3. Start the DL/ID application online",
                steps: [
                  "Open <a href=\"https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/dl-id-online-app-edl-44/\" target=\"_blank\" rel=\"noreferrer\">Driver's License / ID Card Application</a> and click Start Application.",
                  "Create or sign in to a DMV online account. Have email and phone access ready because DMV uses two-factor authentication.",
                  "Choose Driver License and the correct card type. If converting to REAL ID, upload the documents requested during the online application, then still bring the originals to the DMV office.",
                  "When the online application is submitted, save the email and confirmation number. DMV staff use that confirmation number to find your application at the field office.",
                  "If the online application cannot fit your situation, do not guess. Use a DMV office application process, DMV phone support, or an appointment instead."
                ],
              },
              {
                title: "4. Study, test, and schedule the right appointment",
                steps: [
                  "Open DMV <a href=\"https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/preparing-for-knowledge-and-drive-tests/\" target=\"_blank\" rel=\"noreferrer\">Knowledge and Drive Tests Preparation</a>. Use it as the main testing page.",
                  "Open DMV <a href=\"https://www.dmv.ca.gov/portal/driver-handbooks/\" target=\"_blank\" rel=\"noreferrer\">Driver Handbooks</a> and study the California Driver Handbook before the knowledge test. Then use DMV <a href=\"https://www.dmv.ca.gov/portal/driver-education-and-safety/educational-materials/sample-driver-license-dl-knowledge-tests/\" target=\"_blank\" rel=\"noreferrer\">Practice Tests</a> to check whether you are ready.",
                  "If you have never had a license, open DMV <a href=\"https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/learners-permits/\" target=\"_blank\" rel=\"noreferrer\">Learner's Permits</a> so you understand the permit step before the drive test.",
                  "Use DMV <a href=\"https://www.dmv.ca.gov/portal/appointments/select-appointment-type/\" target=\"_blank\" rel=\"noreferrer\">Schedule Appointment</a> for office or drive-test appointments. For AB 60 interpreter needs, call 1-800-777-0133 as DMV instructs.",
                  "Before going, open DMV <a href=\"https://www.dmv.ca.gov/portal/locations/field-offices/\" target=\"_blank\" rel=\"noreferrer\">Field Offices</a> and search a location. Do not arrive late for testing; DMV says knowledge tests are not available within the last part of the business day."
                ],
              },
              {
                title: "5. Finish at DMV, then track the card",
                steps: [
                  "At the DMV office, bring originals or certified copies, residency proof, confirmation number, payment method for the <a href=\"https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/licensing-fees/\" target=\"_blank\" rel=\"noreferrer\">licensing fee</a>, and any name-change documents.",
                  "At the counter, you normally finish identity/document review, thumbprint, vision exam, photo, fee, and knowledge test if required.",
                  "For a behind-the-wheel test, bring proof of insurance/financial responsibility and a vehicle that is properly registered, safe, and allowed for the test. If you have a foreign license, plan for a drive test instead of assuming it transfers.",
                  "After passing, keep the temporary license. DMV says the card is mailed; if it does not arrive, use <a href=\"https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/drivers-license-id-card-status/\" target=\"_blank\" rel=\"noreferrer\">Driver's License & ID Card Status</a> or call DMV with your information.",
                  "Save the application confirmation, appointment confirmation, receipts, temporary license, test results, and mailing/status screenshots until the plastic card arrives."
                ],
              },
            ],
            mistakes: ["Starting from a random driving-school page instead of DMV's application and checklist pages.", "Choosing REAL ID without checking the stricter identity, name-change, and two-residency-document requirements.", "Assuming AB 60 is the same as REAL ID or can be used for federal identification.", "Bringing photocopies when DMV needs originals or certified copies.", "Using residency documents that do not show your current California mailing address.", "Assuming a foreign driver's license avoids the California drive test.", "Going to DMV without the online application confirmation number, appointment confirmation, payment method, or proof of insurance for the drive test.", "Ignoring a secondary review notice or mailed DMV request."],
            next: "Track the mailed card, keep the temporary license until the plastic card arrives, and put the renewal date on your calendar. If the card is late, use DMV status check or call 1-800-777-0133. After moving, update your DMV address through official DMV services.",
            links: [["DMV Driver's Licenses", "https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/driver-licenses-dl/"], ["DL/ID Online Application", "https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/dl-id-online-app-edl-44/"], ["REAL ID", "https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/real-id/"], ["REAL ID Checklist", "https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/real-id/real-id-checklist/"], ["AB 60 Driver's Licenses", "https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/assembly-bill-ab-60-driver-licenses/"], ["AB 60 Wizard", "https://www.dmv.ca.gov/portal/assembly-bill-ab-60-wizard/"], ["Federal Non-Compliant Documents PDF", "https://www.dmv.ca.gov/portal/file/federal-non-compliant-dl-id-card-documents-list-pdf/"], ["Residency Documents PDF", "https://www.dmv.ca.gov/portal/file/residency-documents-list-pdf/"], ["Learner's Permits", "https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/learners-permits/"], ["Knowledge and Drive Tests", "https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/preparing-for-knowledge-and-drive-tests/"], ["Driver Handbooks", "https://www.dmv.ca.gov/portal/driver-handbooks/"], ["Practice Tests", "https://www.dmv.ca.gov/portal/driver-education-and-safety/educational-materials/sample-driver-license-dl-knowledge-tests/"], ["Schedule Appointment", "https://www.dmv.ca.gov/portal/appointments/select-appointment-type/"], ["Field Offices", "https://www.dmv.ca.gov/portal/locations/field-offices/"], ["Licensing Fees", "https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/licensing-fees/"], ["DL/ID Status", "https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/drivers-license-id-card-status/"]],
          },
        ],
      },
      help: {
        breadcrumb: "Who Handles It",
        title: "Do not start with a city hall.",
        intro: "Rowland Heights is unincorporated, so most local issues go to LA County departments or the First District office.",
        sectionEyebrow: "Problem Router",
        sectionTitle: "Select the issue.",
        sectionText: "Use an exact address or cross streets. Save every confirmation number.",
        selectLabel: "Problem type",
        nextLabel: "Public participation",
        nextHref: "participate.html",
        fields: ["Agency", "Phone", "Online", "Track", "If no response"],
        issues: [
          {
            id: "roads",
            label: "Roads, potholes, streetlights, trees",
            title: "Roads, potholes, streetlights, trees",
            values: ["LA County Public Works.", "Urgent requests are available 24 hours a day at (800) 675-HELP (4357).", "Use <a href=\"https://dpw.lacounty.gov/explore-public-works/report-a-problem/\" target=\"_blank\" rel=\"noreferrer\">Report a Problem</a> or The Works app for potholes, lights, sweeping, signals, trimming, and drainage. If a location has no marked crosswalk or needs safer pedestrian crossing, choose Traffic/Pedestrian Signals and write: Request marked crosswalk or pedestrian safety review at [intersection/address]. Use the <a href=\"https://pw.lacounty.gov/\" target=\"_blank\" rel=\"noreferrer\">Service Locator</a> if you need to confirm the County service area.", "Save request number, address or cross street, photos, and date.", "Follow up through <a href=\"https://dpw.lacounty.gov/explore-public-works/report-a-problem/\" target=\"_blank\" rel=\"noreferrer\">Report a Problem</a> or Public Works, then contact First District constituent support with the case number."],
            links: [["Report a Problem", "https://dpw.lacounty.gov/explore-public-works/report-a-problem/"], ["Service Locator", "https://pw.lacounty.gov/"]],
          },
          {
            id: "trash",
            label: "Trash, dumping, graffiti",
            title: "Trash, dumping, graffiti",
            values: ["LA County Public Works and Environmental Services.", "Use official report links. Urgent hazards can use (800) 675-HELP.", "Report graffiti or illegal dumping through <a href=\"https://dpw.lacounty.gov/explore-public-works/report-a-problem/\" target=\"_blank\" rel=\"noreferrer\">Report Dumping</a>. For waste collection and authorized hauler questions, use <a href=\"https://pw.lacounty.gov/epd/swims/\" target=\"_blank\" rel=\"noreferrer\">Solid Waste</a>.", "Keep photos, exact location, safe vehicle details, and confirmation number.", "For recurring dumping, follow up through <a href=\"https://dpw.lacounty.gov/explore-public-works/report-a-problem/\" target=\"_blank\" rel=\"noreferrer\">Report Dumping</a>, then copy First District support."],
            links: [["Report Dumping", "https://dpw.lacounty.gov/explore-public-works/report-a-problem/"], ["Solid Waste", "https://pw.lacounty.gov/epd/swims/"]],
          },
          {
            id: "business",
            label: "Business license and permits",
            title: "Business license and permits",
            values: ["For a Rowland Heights address, this can involve the LA County Treasurer and Tax Collector, Registrar-Recorder/County Clerk, California Secretary of State, CDTFA, IRS, and EPIC-LA/Public Works depending on what you are opening.", "County Business License Section: (213) 974-2011 or <a href=\"mailto:businesslicense@ttc.lacounty.gov\">businesslicense@ttc.lacounty.gov</a>.", "Start with the <a href=\"https://ttc.lacounty.gov/business-license-requirements-2/\" target=\"_blank\" rel=\"noreferrer\">Business License Requirements</a> page. Use <a href=\"https://appcenter.gis.lacounty.gov/districtlocator/\" target=\"_blank\" rel=\"noreferrer\">District Locator</a> to confirm the address is unincorporated, then use <a href=\"https://epicla.lacounty.gov/energov_prod/selfservice/Selfservice\" target=\"_blank\" rel=\"noreferrer\">Apply for a Business License</a> if the activity requires a County license.", "Save the District Locator result, EPIC-LA account email, application number, license number, FBN filing number, SOS entity number, EIN confirmation, seller's permit number, receipts, and agency emails.", "If you cannot tell which permit applies, call or email the Business License Section first. If County departments conflict, send First District support the address, business activity, and screenshots of the official pages you used."],
            process: [
              "Write down four facts before clicking anything: business address, business activity, business name, and structure. Structure means sole proprietor, partnership, LLC, or corporation. Do not pay a third-party site before you know which government filing you need.",
              "Check location first. Open <a href=\"https://appcenter.gis.lacounty.gov/districtlocator/\" target=\"_blank\" rel=\"noreferrer\">District Locator</a>, enter the exact Rowland Heights business address, and confirm the Political District result says Unincorporated. If it shows an incorporated city, follow that city's business license process instead.",
              "Check whether the County licenses your activity. Open <a href=\"https://ttc.lacounty.gov/business-license-requirements-2/\" target=\"_blank\" rel=\"noreferrer\">Business License Requirements</a>, read the licensable-activities instructions, then click the County page's CONTINUE / Apply for a Business License route. On the EPIC-LA page, choose Log In or Register, complete registration if needed, then start the business license application from the portal.",
              "If you are forming an LLC or corporation, open the California Secretary of State <a href=\"https://www.sos.ca.gov/business-programs/business-entities\" target=\"_blank\" rel=\"noreferrer\">Business Entities</a> page and use <a href=\"https://bizfileonline.sos.ca.gov/\" target=\"_blank\" rel=\"noreferrer\">bizfileOnline</a> / Form a Business. Do this before applying for an EIN if you are creating a legal entity.",
              "If the public business name is not just your legal name, open LA County <a href=\"https://www.lavote.gov/home/county-clerk/fictitious-business-names/filing\" target=\"_blank\" rel=\"noreferrer\">File a Fictitious Business Name</a>, click GET STARTED, complete identity, signature, and payment, then check the <a href=\"https://www.lavote.gov/home/county-clerk/fictitious-business-names/publication\" target=\"_blank\" rel=\"noreferrer\">Publication</a> page so the filing does not stall after submission.",
              "If you need a federal tax ID, open IRS <a href=\"https://www.irs.gov/businesses/employer-identification-number\" target=\"_blank\" rel=\"noreferrer\">Employer Identification Number</a> and use Apply online. Save the EIN confirmation letter. Do not use paid EIN look-alike sites.",
              "If you sell or lease taxable goods, open CDTFA <a href=\"https://cdtfa.ca.gov/taxes-and-fees/faqseller.htm\" target=\"_blank\" rel=\"noreferrer\">Obtaining a Seller's Permit</a>, then use <a href=\"https://onlineservices.cdtfa.ca.gov/_/\" target=\"_blank\" rel=\"noreferrer\">register online</a>. A seller's permit is separate from a County business license.",
              "If you will remodel, add signs, change use, occupy a commercial space, or do land-use work, use <a href=\"https://epicla.lacounty.gov/\" target=\"_blank\" rel=\"noreferrer\">EPIC-LA</a> and <a href=\"https://www.calgold.ca.gov/\" target=\"_blank\" rel=\"noreferrer\">CalGold</a> to identify building, zoning, fire, health, and other permits before signing a lease or starting construction.",
              "After each submission, save the confirmation screen and write the next expected step. If no reply arrives, follow up with the exact confirmation number and ask which agency owns the next action."
            ],
            links: [["Business License Requirements", "https://ttc.lacounty.gov/business-license-requirements-2/"], ["Apply for a Business License", "https://epicla.lacounty.gov/energov_prod/selfservice/Selfservice"], ["Business License Contact", "https://ttc.lacounty.gov/business-license-contact/"], ["District Locator", "https://appcenter.gis.lacounty.gov/districtlocator/"], ["California Secretary of State Business Entities", "https://www.sos.ca.gov/business-programs/business-entities"], ["bizfileOnline", "https://bizfileonline.sos.ca.gov/"], ["Fictitious Business Name Filing", "https://www.lavote.gov/home/county-clerk/fictitious-business-names/filing"], ["Fictitious Business Name Publication", "https://www.lavote.gov/home/county-clerk/fictitious-business-names/publication"], ["IRS EIN", "https://www.irs.gov/businesses/employer-identification-number"], ["CDTFA Seller's Permit", "https://cdtfa.ca.gov/taxes-and-fees/faqseller.htm"], ["CDTFA Register Online", "https://onlineservices.cdtfa.ca.gov/_/"], ["EPIC-LA", "https://epicla.lacounty.gov/"], ["CalGold", "https://www.calgold.ca.gov/"]],
          },
          {
            id: "safety",
            label: "Crime, safety, parking",
            title: "Crime, safety, parking",
            values: ["LA County Sheriff's Department, Walnut and Diamond Bar Station.", "Walnut: (909) 595-2264. Diamond Bar line: (626) 913-1715. Emergency danger: 911.", "Use the <a href=\"https://lasd.org/walnut-diamond-bar/\" target=\"_blank\" rel=\"noreferrer\">Walnut and Diamond Bar Station</a> page for eligible online reports and parking enforcement information.", "Save report number, staff name if given, date, and station contact from the <a href=\"https://lasd.org/walnut-diamond-bar/\" target=\"_blank\" rel=\"noreferrer\">station page</a>.", "For service concerns, use Sheriff's Department complaint channels listed from the <a href=\"https://lasd.org/walnut-diamond-bar/\" target=\"_blank\" rel=\"noreferrer\">station page</a>. For broader patterns, contact First District and speak at meetings."],
            links: [["Walnut and Diamond Bar Station", "https://lasd.org/walnut-diamond-bar/"]],
          },
          {
            id: "housing",
            label: "Housing, rent, landlord and tenant",
            title: "Housing, rent, landlord and tenant",
            values: ["LA County Department of Consumer and Business Affairs.", "Housing counselors: (800) 593-8222 or <a href=\"mailto:rent@dcba.lacounty.gov\">rent@dcba.lacounty.gov</a>.", "Use <a href=\"https://dcba.lacounty.gov/rentstabilization/\" target=\"_blank\" rel=\"noreferrer\">Housing Help</a> for complaint, mediation, rent stabilization, and tenant protection information. Use <a href=\"https://www.stayhousedla.org/\" target=\"_blank\" rel=\"noreferrer\">Stay Housed LA</a> for eviction and legal-help routing.", "Save lease, notices, repair requests, photos, texts, emails, rent receipts, and case numbers.", "If eviction or lockout is involved, start with <a href=\"https://www.stayhousedla.org/\" target=\"_blank\" rel=\"noreferrer\">Stay Housed LA</a> immediately and track every deadline."],
            links: [["Housing Help", "https://dcba.lacounty.gov/rentstabilization/"], ["Stay Housed LA", "https://www.stayhousedla.org/"]],
          },
          {
            id: "animals",
            label: "Animals",
            title: "Animals",
            values: ["LA County Animal Care and Control or Public Works referral links.", "Immediate danger: 911. Routine issues start from <a href=\"https://animalcare.lacounty.gov/\" target=\"_blank\" rel=\"noreferrer\">Animal Care</a> or the <a href=\"https://dpw.lacounty.gov/explore-public-works/report-a-problem/\" target=\"_blank\" rel=\"noreferrer\">Public Works Animal Link</a>.", "Use the <a href=\"https://dpw.lacounty.gov/explore-public-works/report-a-problem/\" target=\"_blank\" rel=\"noreferrer\">Public Works Animal Link</a> for sick, injured, dead, or loose animal reports that Public Works routes to County animal care systems.", "Write location, animal description, time seen, and whether people are in danger.", "Use the case number and the <a href=\"https://animalcare.lacounty.gov/\" target=\"_blank\" rel=\"noreferrer\">Animal Care</a> or Public Works contact for follow-up."],
            links: [["Public Works Animal Link", "https://dpw.lacounty.gov/explore-public-works/report-a-problem/"], ["Animal Care", "https://animalcare.lacounty.gov/"]],
          },
        ],
      },
      participate: {
        breadcrumb: "Public Participation",
        title: "Participate even when voting is not available to you.",
        intro: "Residents can attend meetings, submit comments, contact elected offices, and vote if eligible. Service reports now live under Who Handles It, so this section stays focused on public participation.",
        cards: [
          ["Attend Board meetings", "Check the LA County Board agenda, meeting date, item number, remote options, translation, and accommodation instructions."],
          ["Submit public comment", "Written comments are public. Pick the agenda item, choose support, oppose, or other, write clearly, and save your confirmation."],
          ["Contact elected officials", "Rowland Heights is in the First District. Send a short issue summary, case numbers, official replies, and a clear ask."],
          ["Register to vote if eligible", "First confirm eligibility, then register or check your record, choose Vote by Mail or a Vote Center, and track the ballot."],
        ],
        meetingTitle: "Before a meeting",
        meetingSteps: [
          "Open <a href=\"https://bos.lacounty.gov/board-meeting-agendas/\" target=\"_blank\" rel=\"noreferrer\">Board Meeting Agendas</a>. Choose the meeting date, then open Agenda or PDF. Write down the agenda item number, department, meeting date, and whether a translated agenda is available.",
          "Open <a href=\"https://bos.lacounty.gov/board-meeting-agendas/how-to-participate/\" target=\"_blank\" rel=\"noreferrer\">How to Participate</a> before the meeting. Use it to choose in-person participation, Webex, phone participation, viewing only, written public comment, translation, or accommodation requests.",
          "If you want to speak remotely, start from <a href=\"https://bos.lacounty.gov/board-meeting-agendas/\" target=\"_blank\" rel=\"noreferrer\">Board Meeting Agendas</a> on the meeting day and use the current Join the Meeting, phone number, access code, and password shown for that meeting. The call-in information can change by meeting.",
          "If you want to submit writing instead of speaking, open <a href=\"https://publiccomment.bos.lacounty.gov/\" target=\"_blank\" rel=\"noreferrer\">Submit Public Comment</a>. Fill in the required name fields, choose the agenda item, select In Favor, Oppose, or Other, review, acknowledge, and save a screenshot because comments become public record.",
          "If you only want to watch or need live translation, open <a href=\"https://bos.lacounty.gov/board-meeting-agendas/live-broadcast/\" target=\"_blank\" rel=\"noreferrer\">Live Broadcast</a>. For language translation, use the external player and the Language Translation tab when the stream opens.",
          "For a translator, reasonable modification, or disability accommodation, follow <a href=\"https://bos.lacounty.gov/board-meeting-agendas/how-to-participate/\" target=\"_blank\" rel=\"noreferrer\">How to Participate</a> and contact the Customer Service Desk at (213) 974-1411 as early as possible.",
          "Write one short paragraph with the problem, location, agenda item number, and requested action. Bring or attach case numbers, photos, letters, emails, and prior agency replies if the issue was already reported."
        ],
        commentTitle: "Submission steps",
        commentSteps: [
          "Start from <a href=\"https://bos.lacounty.gov/board-meeting-agendas/\" target=\"_blank\" rel=\"noreferrer\">Board Meeting Agendas</a>, choose the meeting date, then open Agenda, PDF, or the translated agenda. Write down the exact agenda item number and title. If your topic is not tied to a specific agenda item, use the Public Comment row in the comment portal.",
          "Open <a href=\"https://publiccomment.bos.lacounty.gov/\" target=\"_blank\" rel=\"noreferrer\">Submit Public Comment</a>. Fill the required First Name and Last Name fields. Email, phone, address, city, organization, and interpreter request fields may appear; only add information you are comfortable becoming part of the public record.",
          "If you have a letter, photos, or evidence, use Attach File. The portal accepts supporting Word, Excel, or PDF documents and shows a 5-attachment limit. Keep private information out of attachments unless it is necessary.",
          "In Agenda Items, select the checkbox next to the correct item number. If it is general comment, select Public Comment. Choose In Favor, Oppose, or Other based on your position.",
          "Write the comment in a short structure: I live/work/study in Rowland Heights; I am commenting on item [number/title] or general public comment; the problem is [one sentence]; I ask the Board to [clear action].",
          "Select Next, review the verification page, then select Acknowledge to submit. If anything is wrong, go back and edit before acknowledging.",
          "After the confirmation screen appears, screenshot or print it. Save the meeting date, item number, your comment text, attachment names, submission time, and any confirmation message. Written comments are public and the County says they are linked to the online agenda periodically through the end of the Board meeting."
        ],
        officialsTitle: "Contact process",
        officialsSteps: [
          "First decide the level of government. For Rowland Heights roads, dumping, trees, housing help, permits, County departments, or unresolved LA County service requests, start with the LA County First District. For California laws or state agencies, use state representatives. For federal laws, immigration agencies, Social Security, Medicare, or federal benefits, use federal representatives.",
          "For County issues, confirm the address with the <a href=\"https://appcenter.gis.lacounty.gov/districtlocator/\" target=\"_blank\" rel=\"noreferrer\">LA County District Locator</a>. Save the result showing the supervisorial district and the exact address or cross streets.",
          "Open the official LA County page for <a href=\"https://lacounty.gov/government/board-of-supervisors/hilda-l-solis/\" target=\"_blank\" rel=\"noreferrer\">Supervisor Hilda L. Solis, First District</a> or the Board's <a href=\"https://bos.lacounty.gov/executive-office/about-us/board-contact-information/\" target=\"_blank\" rel=\"noreferrer\">Board Contact Information</a>. Use firstdistrict@bos.lacounty.gov, (213) 974-4111, or the <a href=\"https://hildalsolis.org/\" target=\"_blank\" rel=\"noreferrer\">First District website</a> for constituent help.",
          "For state issues, open <a href=\"https://findyourrep.legislature.ca.gov/\" target=\"_blank\" rel=\"noreferrer\">Find Your California Representatives</a>. Enter the Rowland Heights address and use the Senate and Assembly contact links shown for that address.",
          "For federal House issues, open <a href=\"https://www.house.gov/representatives/find-your-representative\" target=\"_blank\" rel=\"noreferrer\">Find Your Representative</a>. Enter the ZIP code and address if requested. For U.S. Senators, use the official <a href=\"https://www.senate.gov/senators/senators-contact.htm?State=CA\" target=\"_blank\" rel=\"noreferrer\">California Senators contact page</a>.",
          "Write the message in this order: I live/work/study in Rowland Heights; the issue is at [address/cross streets]; I already contacted [agency] on [date]; my case or confirmation number is [number]; I am asking your office to [specific action, such as check status, identify the responsible department, or support a policy change].",
          "Attach only useful records: case numbers, photos, notices, agency replies, meeting item numbers, and dates. Do not include immigration status, Social Security numbers, medical details, or private documents unless the office specifically needs them for a casework request.",
          "After submitting the contact form, email, or phone call, save the sent message, staff name if given, phone number, date, and any casework or intake number. If there is no reply after 7 to 10 business days, reply to the same thread with the records attached and ask for the current status and next responsible office."
        ],
        votingTitle: "Registration and voting steps",
        votingSteps: [
          "Confirm eligibility first. Open <a href=\"https://www.sos.ca.gov/elections/voting-resources/voting-california/who-can-vote-california\" target=\"_blank\" rel=\"noreferrer\">Who Can Vote in California</a>. To register and vote, you must be a U.S. citizen, a California resident, 18 or older on Election Day, not currently serving a state or federal prison term for a felony conviction, and not currently found mentally incompetent to vote by a court. If you are 16 or 17 and meet the other requirements, you may pre-register.",
          "If you are not a U.S. citizen, do not register and do not vote. You can still attend meetings, submit public comment, contact elected offices, and report service problems through the other sections of this site.",
          "Yes, eligible voters need to register, or confirm that the existing registration has the current Rowland Heights address. Open <a href=\"https://registertovote.ca.gov/?lang=en-US\" target=\"_blank\" rel=\"noreferrer\">California Online Voter Registration</a>. Choose Register to Vote Now, Pre-Register to Vote, or Check Your Registration Status. Online registration may ask for a California driver license or ID number, the last four digits of your Social Security number, and date of birth.",
          "Check your record at <a href=\"https://voterstatus.sos.ca.gov/EN/Authenticate\" target=\"_blank\" rel=\"noreferrer\">My Voter Status</a>. Confirm your name, address, party preference, language preference, vote-by-mail status, provisional-ballot status, and voting location information.",
          "Register early. The <a href=\"https://www.sos.ca.gov/elections/voter-registration/\" target=\"_blank\" rel=\"noreferrer\">California Voter Registration</a> page says the regular deadline is 15 days before Election Day. If the deadline has passed, use <a href=\"https://www.sos.ca.gov/elections/voter-registration/same-day-reg\" target=\"_blank\" rel=\"noreferrer\">Same Day Voter Registration</a> at a county elections office, polling place, or Vote Center; the ballot is counted after the county verifies the registration.",
          "Choose how to vote in LA County. Open <a href=\"https://www.lavote.gov/home/voting-elections/voter-education/what-to-do-before-an-election/choose-your-way-to-vote\" target=\"_blank\" rel=\"noreferrer\">Choose Your Way to Vote</a>. LA County options include voting at any Vote Center in the County, voting by mail, and early in-person voting at the Registrar's Norwalk headquarters.",
          "Vote by mail: LA County mails every registered voter a Vote by Mail ballot, and mailing begins no later than 29 days before Election Day. Open <a href=\"https://www.lavote.gov/home/voting-elections/voting-options/vote-by-mail/how-to-vote-by-mail\" target=\"_blank\" rel=\"noreferrer\">How to Vote by Mail</a>, fill the ballot, put it in the return envelope, sign the envelope, and return it by mail, drop box, or Vote Center. A mailed ballot must be postmarked by Election Day and received within 7 days.",
          "Vote in person or return a ballot in person by using the <a href=\"https://locator.lavote.gov/locations/vbm?culture=en&os=ioxa42gdub\" target=\"_blank\" rel=\"noreferrer\">LA County locator</a> to find a Vote Center or ballot drop box. Bring the mailed ballot if you have it; if not, ask Vote Center staff what ballot type you should use.",
          "Need Chinese or another language? Open <a href=\"https://www.lavote.gov/home/voting-elections/voter-education/multilingual-services-program/multilingual-services-program\" target=\"_blank\" rel=\"noreferrer\">Multilingual Services</a>. LA County lets voters request translated election materials and ask for language help at Vote Centers. The language assistance line is (800) 815-2666, option 3.",
          "Save proof and follow up. Keep the registration confirmation, a My Voter Status screenshot, ballot-tracking messages, drop box or mail receipt if available, and the LA County Registrar contact page: <a href=\"https://www.lavote.gov/contact-us\" target=\"_blank\" rel=\"noreferrer\">Contact Us</a>. For registration and sample ballot questions, call (800) 815-2666, option 2."
        ],
        links: [["How to Participate", "https://bos.lacounty.gov/board-meeting-agendas/how-to-participate/"], ["Board Meeting Agendas", "https://bos.lacounty.gov/board-meeting-agendas/"], ["Submit Public Comment", "https://publiccomment.bos.lacounty.gov/"], ["Live Broadcast", "https://bos.lacounty.gov/board-meeting-agendas/live-broadcast/"], ["Voter Eligibility", "https://www.sos.ca.gov/elections/voting-resources/voting-california/who-can-vote-california"], ["Register to Vote", "https://registertovote.ca.gov/"], ["My Voter Status", "https://voterstatus.sos.ca.gov/EN/Authenticate"], ["LA County Voting Options", "https://www.lavote.gov/home/voting-elections/voter-education/what-to-do-before-an-election/choose-your-way-to-vote"]],
        nextLabel: "Ways you can participate",
        nextHref: "identity.html",
      },
      identity: {
        breadcrumb: "Ways to Participate",
        title: "Choose what you can do safely.",
        intro: "Pick the broad situation closest to you. This page shows civic actions that may fit, what to avoid, and when to use trusted legal help. It does not ask for exact immigration status, document numbers, or visa details.",
        cards: [
          ["U.S. citizen", ["May register and vote if California eligibility rules are met.", "Can use the full civic toolkit: vote, comment, attend hearings, contact First District, and report County service problems.", "Use official California and LA County pages; save confirmations for every step."]],
          ["Permanent resident", ["Do not register to vote or vote unless you have become a U.S. citizen and meet California voter rules.", "Can still attend meetings, submit public comment, contact County offices, report service problems, and prepare for naturalization if eligible.", "Use USCIS and authorized legal help for citizenship questions; do not rely on notarios or informal advice."]],
          ["Other resident", ["Do not register to vote or vote unless you are a U.S. citizen and meet California voter rules.", "Can still participate without giving immigration details: attend meetings, submit comments, report County service problems, and contact County offices.", "Use broad roles like resident, tenant, worker, parent, customer, or business owner when exact immigration status is not relevant."]],
          ["Not sure", ["Do not guess voting eligibility or status-sensitive questions.", "Start with low-risk actions: observe meetings, report routine County problems, ask agency questions, and keep records.", "Use LA County Office of Immigrant Affairs or authorized legal help before immigration-sensitive steps."]],
        ],
        citizenProcessTitle: "Process for U.S. citizens",
        citizenSteps: [
          "First confirm that you can register and vote. Open <a href=\"https://www.sos.ca.gov/elections/voter-registration/\" target=\"_blank\" rel=\"noreferrer\">California Voter Registration</a> and read Qualifications to Register to Vote. Citizenship alone is not the whole test; also check California residency, age, felony-prison-term status, and court competency status.",
          "Register or update your address. Open <a href=\"https://registertovote.ca.gov/?lang=en-US\" target=\"_blank\" rel=\"noreferrer\">California Online Voter Registration</a>. Choose Register to Vote Now if you are not registered, or use it to update your address, name, party preference, or language preference.",
          "Check that the record actually shows the right address. Open <a href=\"https://voterstatus.sos.ca.gov/EN/Authenticate\" target=\"_blank\" rel=\"noreferrer\">My Voter Status</a>. Save a screenshot showing the current address, party preference, language preference, vote-by-mail status, and voting location information.",
          "Choose how to vote in LA County. Open <a href=\"https://www.lavote.gov/home/voting-elections/voter-education/what-to-do-before-an-election/choose-your-way-to-vote\" target=\"_blank\" rel=\"noreferrer\">Choose Your Way to Vote</a>. Decide whether you will use a Vote Center, Vote by Mail, or early in-person voting. For mail ballots, follow <a href=\"https://www.lavote.gov/home/voting-elections/voting-options/vote-by-mail/how-to-vote-by-mail\" target=\"_blank\" rel=\"noreferrer\">How to Vote by Mail</a> and sign the return envelope.",
          "Find the actual place to vote or return a ballot. Use the <a href=\"https://locator.lavote.gov/locations/vbm?culture=en&os=ioxa42gdub\" target=\"_blank\" rel=\"noreferrer\">LA County locator</a> for Vote Centers and ballot drop boxes. Save the location, open dates, hours, and any receipt or tracking notice.",
          "Use non-voting participation when the issue is not decided by an election. For County policy or public-hearing items, start at <a href=\"https://bos.lacounty.gov/board-meeting-agendas/\" target=\"_blank\" rel=\"noreferrer\">Board Meeting Agendas</a>, find the meeting and item number, then use <a href=\"https://publiccomment.bos.lacounty.gov/\" target=\"_blank\" rel=\"noreferrer\">Submit Public Comment</a>. Save the item number, comment text, attachment names, and confirmation screen.",
          "For Rowland Heights County-service problems or unresolved reports, confirm the district with the <a href=\"https://appcenter.gis.lacounty.gov/districtlocator/\" target=\"_blank\" rel=\"noreferrer\">LA County District Locator</a>, then contact <a href=\"https://lacounty.gov/government/board-of-supervisors/hilda-l-solis/\" target=\"_blank\" rel=\"noreferrer\">Supervisor Hilda L. Solis, First District</a>. Include the address, cross streets, case number, photos, dates, and one clear request.",
          "Close the loop. Keep registration confirmations, My Voter Status screenshots, ballot tracking, public-comment confirmations, sent emails, staff names, and case numbers. If there is no reply after 7 to 10 business days on a County-service issue, follow up in the same email thread or contact channel."
        ],
        permanentResidentProcessTitle: "Process for permanent residents",
        permanentResidentSteps: [
          "Start with the boundary. As a permanent resident, do not register to vote and do not vote. If you later become a U.S. citizen, then use <a href=\"https://www.sos.ca.gov/elections/voter-registration/\" target=\"_blank\" rel=\"noreferrer\">California Voter Registration</a> to confirm voter qualifications before registering.",
          "If you want to explore citizenship, open the <a href=\"https://www.uscis.gov/citizenship\" target=\"_blank\" rel=\"noreferrer\">USCIS Citizenship Resource Center</a> and <a href=\"https://www.uscis.gov/citizenship/learn-about-citizenship/citizenship-and-naturalization/naturalization-eligibility\" target=\"_blank\" rel=\"noreferrer\">Naturalization Eligibility</a>. Check the common categories, such as 5 years as a lawful permanent resident or 3 years as a lawful permanent resident married to a U.S. citizen, plus age, residence, physical presence, English, civics, and good-moral-character requirements.",
          "If travel history, criminal history, taxes, child support, selective service, prior immigration issues, or long absences may affect your case, get authorized help before filing. Use <a href=\"https://www.uscis.gov/scams-fraud-and-misconduct/avoid-scams/find-legal-services\" target=\"_blank\" rel=\"noreferrer\">USCIS Find Legal Services</a>, <a href=\"https://oia.lacounty.gov/immigration-fraud/\" target=\"_blank\" rel=\"noreferrer\">LA County Immigration Services Fraud</a>, or <a href=\"https://oia.lacounty.gov/representla/\" target=\"_blank\" rel=\"noreferrer\">RepresentLA</a>. Do not pay a notario or immigration consultant for legal advice.",
          "If you decide to apply for citizenship, start from <a href=\"https://www.uscis.gov/n-400\" target=\"_blank\" rel=\"noreferrer\">Form N-400, Application for Naturalization</a>. Read the filing options, fee information, required evidence, and edition date before submitting. Save the receipt notice and USCIS account messages.",
          "Prepare for the interview and test through official tools. Use <a href=\"https://my.uscis.gov/citizenship/what_to_expect\" target=\"_blank\" rel=\"noreferrer\">USCIS What to Expect</a> and <a href=\"https://www.uscis.gov/citizenship/find-study-materials-and-resources/citizenship-multilingual-resources\" target=\"_blank\" rel=\"noreferrer\">Citizenship Multilingual Resources</a> for study materials, language information, and interview steps.",
          "Participate locally without voting. For County meetings or public-hearing items, open <a href=\"https://bos.lacounty.gov/board-meeting-agendas/\" target=\"_blank\" rel=\"noreferrer\">Board Meeting Agendas</a>, find the meeting date and item number, then use <a href=\"https://publiccomment.bos.lacounty.gov/\" target=\"_blank\" rel=\"noreferrer\">Submit Public Comment</a>. Use your role as a Rowland Heights resident, tenant, parent, worker, customer, or business owner; do not include immigration status unless it is necessary.",
          "Report County service problems through the responsible agency. For roads, lights, trees, and many public-works issues, start with <a href=\"https://dpw.lacounty.gov/explore-public-works/report-a-problem/\" target=\"_blank\" rel=\"noreferrer\">Public Works Report a Problem</a>. Save the case number, date, location, photos, and confirmation message.",
          "If a Rowland Heights County-service issue is unresolved, confirm the district with the <a href=\"https://appcenter.gis.lacounty.gov/districtlocator/\" target=\"_blank\" rel=\"noreferrer\">LA County District Locator</a>, then contact <a href=\"https://lacounty.gov/government/board-of-supervisors/hilda-l-solis/\" target=\"_blank\" rel=\"noreferrer\">Supervisor Hilda L. Solis, First District</a>. Ask for help identifying the responsible department or checking the status of an existing case.",
          "Close the loop. Keep USCIS receipts, legal-help intake confirmations, public-comment confirmations, County case numbers, agency replies, staff names, dates, and screenshots. If a County office does not respond after 7 to 10 business days, follow up in the same thread and attach the records."
        ],
        otherResidentProcessTitle: "Process for other residents",
        otherResidentSteps: [
          "Start with the voting boundary. Do not register to vote and do not vote unless you are a U.S. citizen and meet California voter rules. If you are unsure about voting eligibility, do not guess; read <a href=\"https://www.sos.ca.gov/elections/voting-resources/voting-california/who-can-vote-california\" target=\"_blank\" rel=\"noreferrer\">Who Can Vote in California</a> or ask authorized legal help before taking any voting step.",
          "Choose a non-status role for routine civic action. Use resident, tenant, worker, parent, student, customer, driver, pedestrian, or business owner when that describes why the issue affects you. Do not add immigration status, A-number, visa type, or private documents unless an official process specifically requires it.",
          "For County meetings or policy items, open <a href=\"https://bos.lacounty.gov/board-meeting-agendas/\" target=\"_blank\" rel=\"noreferrer\">Board Meeting Agendas</a>. Pick the meeting date, agenda item number, and department. If you need translation, remote access, or accommodation instructions, open <a href=\"https://bos.lacounty.gov/board-meeting-agendas/how-to-participate/\" target=\"_blank\" rel=\"noreferrer\">How to Participate</a> before the meeting.",
          "To submit written input, use <a href=\"https://publiccomment.bos.lacounty.gov/\" target=\"_blank\" rel=\"noreferrer\">Submit Public Comment</a>. Write as a Rowland Heights resident or affected person, choose the agenda item, attach only necessary evidence, and save the confirmation screen because written comments can become public record.",
          "For everyday County service problems, start with the responsible agency instead of a political office. Roads, street lights, trees, illegal dumping, and many public-works issues start at <a href=\"https://dpw.lacounty.gov/explore-public-works/report-a-problem/\" target=\"_blank\" rel=\"noreferrer\">Public Works Report a Problem</a>. Save the case number, exact location, photos, date, and confirmation.",
          "For housing or tenant problems, use <a href=\"https://dcba.lacounty.gov/rentstabilization/\" target=\"_blank\" rel=\"noreferrer\">LA County DCBA Housing Help</a>. Keep lease pages, notices, repair requests, photos, rent receipts, text messages, emails, and any case number. If there is an eviction deadline, seek legal help immediately.",
          "If a Rowland Heights County-service case is not moving, confirm the district with the <a href=\"https://appcenter.gis.lacounty.gov/districtlocator/\" target=\"_blank\" rel=\"noreferrer\">LA County District Locator</a>, then contact <a href=\"https://lacounty.gov/government/board-of-supervisors/hilda-l-solis/\" target=\"_blank\" rel=\"noreferrer\">Supervisor Hilda L. Solis, First District</a>. Ask for status help or the correct responsible department, and include only the case record and issue facts.",
          "If the issue is immigration-sensitive, start with <a href=\"https://oia.lacounty.gov/for-la-county-immigrants/\" target=\"_blank\" rel=\"noreferrer\">Resources for Los Angeles County Immigrants</a> or <a href=\"https://oia.lacounty.gov/representla/\" target=\"_blank\" rel=\"noreferrer\">RepresentLA</a>. If someone asks for money or gives immigration legal advice without authorization, check <a href=\"https://oia.lacounty.gov/immigration-fraud/\" target=\"_blank\" rel=\"noreferrer\">LA County Immigration Services Fraud</a> before paying or signing anything.",
          "Close the loop. Keep public-comment confirmations, County case numbers, agency replies, screenshots, dates, staff names, and phone numbers. If there is no reply after 7 to 10 business days on a routine County issue, follow up through the same channel and attach the records."
        ],
        notSureProcessTitle: "Process when you are not sure",
        notSureSteps: [
          "Start with the voting boundary. If you are not sure whether you can vote, do not register to vote and do not vote. Read <a href=\"https://www.sos.ca.gov/elections/voting-resources/voting-california/who-can-vote-california\" target=\"_blank\" rel=\"noreferrer\">Who Can Vote in California</a>. If the answer is still unclear, ask authorized legal help before taking any voting step.",
          "Keep status details out of routine civic forms. Do not add immigration status, A-number, visa type, passport number, Social Security number, medical details, or private documents unless the official process specifically asks for them and you understand why.",
          "Choose a low-risk role. For routine public participation, use resident, tenant, worker, parent, student, customer, driver, pedestrian, or affected person. The goal is to explain how the County service or policy affects you, not to prove immigration status.",
          "If you only want to learn before speaking, start with <a href=\"https://bos.lacounty.gov/board-meeting-agendas/\" target=\"_blank\" rel=\"noreferrer\">Board Meeting Agendas</a>. Pick a meeting date and agenda item, then open <a href=\"https://bos.lacounty.gov/board-meeting-agendas/how-to-participate/\" target=\"_blank\" rel=\"noreferrer\">How to Participate</a> for viewing, translation, remote access, disability accommodation, and public-comment instructions.",
          "If you are comfortable submitting written input, use <a href=\"https://publiccomment.bos.lacounty.gov/\" target=\"_blank\" rel=\"noreferrer\">Submit Public Comment</a>. Write as a Rowland Heights resident or affected person, select the agenda item, attach only necessary evidence, and save the confirmation screen because public comments can become public record.",
          "For routine service issues, use an agency form before contacting elected offices. Roads, street lights, trees, illegal dumping, and many public-works items start at <a href=\"https://dpw.lacounty.gov/explore-public-works/report-a-problem/\" target=\"_blank\" rel=\"noreferrer\">Public Works Report a Problem</a>. Save the case number, date, exact location, photos, and confirmation message.",
          "For housing or tenant problems, use <a href=\"https://dcba.lacounty.gov/rentstabilization/\" target=\"_blank\" rel=\"noreferrer\">LA County DCBA Housing Help</a>. If there is an eviction deadline, lockout, threat, or court paper, seek legal help immediately before submitting optional public comments.",
          "If the question is immigration-sensitive, start with <a href=\"https://oia.lacounty.gov/for-la-county-immigrants/\" target=\"_blank\" rel=\"noreferrer\">Resources for Los Angeles County Immigrants</a> or <a href=\"https://oia.lacounty.gov/representla/\" target=\"_blank\" rel=\"noreferrer\">RepresentLA</a>. If someone asks for money, promises an immigration result, or gives legal advice without authorization, check <a href=\"https://oia.lacounty.gov/immigration-fraud/\" target=\"_blank\" rel=\"noreferrer\">LA County Immigration Services Fraud</a> before signing or paying.",
          "If a Rowland Heights County-service case is not moving, confirm the district with the <a href=\"https://appcenter.gis.lacounty.gov/districtlocator/\" target=\"_blank\" rel=\"noreferrer\">LA County District Locator</a>, then contact <a href=\"https://lacounty.gov/government/board-of-supervisors/hilda-l-solis/\" target=\"_blank\" rel=\"noreferrer\">Supervisor Hilda L. Solis, First District</a>. Ask for the responsible department or current status, and include only the case record and issue facts.",
          "Close the loop. Keep agency confirmations, public-comment screenshots, case numbers, staff names, dates, email threads, and phone notes. If there is no reply after 7 to 10 business days on a routine County issue, follow up in the same channel with the records attached."
        ],
        privacyTitle: "Privacy rule",
        privacyText: "For routine County service requests, do not add immigration details that the form does not ask for. Public comments and meeting records can become public.",
        links: [["Office of Immigrant Affairs", "https://oia.lacounty.gov/"], ["Voter Eligibility", "https://www.sos.ca.gov/elections/voting-resources/voting-california/who-can-vote-california"]],
        nextLabel: "After-action loop",
        nextHref: "followup.html",
      },
      followup: {
        breadcrumb: "After-Action Loop",
        title: "Submitting the form is only step one.",
        intro: "If the official page gives a response time, follow that first. If not, use this tracking rhythm for routine issues.",
        timeline: [
          ["Submit", "Use the official form, phone, or email. Write the address, issue type, date, and contact method."],
          ["Save proof", "Screenshot confirmation pages, write case numbers, and keep auto-reply emails."],
          ["Wait with date", "If no official timeline is shown, set a reminder for 5 to 10 business days for routine issues."],
          ["Follow up", "Reply to confirmation email or call with the case number. Ask for status and next action."],
          ["Escalate cleanly", "If there is no response, contact the next responsible office, often First District support, with records attached."],
        ],
        submitTitle: "Submit the right way",
        submitSteps: [
          "Before opening a form, write one plain sentence: what happened, where it happened, when it happened, and what you want fixed. Keep the exact Rowland Heights address or cross streets, photos, dates, and any prior case number ready.",
          "Choose the correct official route first. For roads, potholes, street lights, trees, illegal dumping, graffiti, flooding, traffic or pedestrian signals, and many County infrastructure problems, open <a href=\"https://dpw.lacounty.gov/explore-public-works/report-a-problem/\" target=\"_blank\" rel=\"noreferrer\">Public Works Report a Problem</a>. Pick the closest problem type before writing the description.",
          "For housing, rent, tenant protections, repairs, notices, or landlord problems, open <a href=\"https://dcba.lacounty.gov/rentstabilization/\" target=\"_blank\" rel=\"noreferrer\">LA County DCBA Housing Help</a>. Prepare lease pages, notices, repair requests, rent receipts, photos, emails, texts, and deadlines before submitting or calling.",
          "For business license or business setup questions in unincorporated Rowland Heights, start with <a href=\"https://ttc.lacounty.gov/business-license-requirements-2/\" target=\"_blank\" rel=\"noreferrer\">LA County Business License Requirements</a>. If the site directs you to an application, use <a href=\"https://epicla.lacounty.gov/energov_prod/selfservice/Selfservice\" target=\"_blank\" rel=\"noreferrer\">EPIC-LA</a> and save the application or record number.",
          "For safety, crime, or parking enforcement that is not an immediate emergency, use <a href=\"https://lasd.org/walnut-diamond-bar/\" target=\"_blank\" rel=\"noreferrer\">LASD Walnut/Diamond Bar Station</a>, which serves Rowland Heights. For immediate danger, call 911 instead of using a web form.",
          "For public policy, agenda items, hearings, or comments to the Board, first open <a href=\"https://bos.lacounty.gov/board-meeting-agendas/\" target=\"_blank\" rel=\"noreferrer\">Board Meeting Agendas</a> and write down the meeting date and item number. Then submit writing through <a href=\"https://publiccomment.bos.lacounty.gov/\" target=\"_blank\" rel=\"noreferrer\">Submit Public Comment</a> and save the confirmation screen.",
          "If you are not sure which County district or elected office applies, use the <a href=\"https://appcenter.gis.lacounty.gov/districtlocator/\" target=\"_blank\" rel=\"noreferrer\">LA County District Locator</a> with the exact address. Save the result before contacting First District or any elected office.",
          "When the form asks for details, write a short description in this order: location, problem type, when observed, safety risk, what you already tried, and what action you are requesting. Avoid adding immigration status, Social Security numbers, medical details, or private documents unless the official form specifically requires them.",
          "Before pressing Submit, check the address, spelling, email, phone number, attachment names, and selected category. Wrong category is one of the main reasons requests disappear or get routed slowly.",
          "Immediately after submission, save the confirmation page, case number, record number, email receipt, submission time, selected category, uploaded file names, and the exact wording you submitted. If there is no confirmation number, screenshot the final page anyway and write down the date and time."
        ],
        saveProofTitle: "Save proof step by step",
        saveProofSteps: [
          "Create one case folder before you lose the page. Name it in this format: date, agency, issue, location. Example: 2026-08-01 Public Works pothole Colima-Nogales. Put screenshots, photos, receipts, emails, and notes in the same folder.",
          "For <a href=\"https://dpw.lacounty.gov/explore-public-works/report-a-problem/\" target=\"_blank\" rel=\"noreferrer\">Public Works Report a Problem</a>, save the confirmation screen, selected problem type, exact address or cross streets, photo names, map pin if shown, submission date, and any case number or email receipt.",
          "For <a href=\"https://dcba.lacounty.gov/rentstabilization/\" target=\"_blank\" rel=\"noreferrer\">LA County DCBA Housing Help</a>, save lease pages, notices, repair requests, rent receipts, photos, texts, emails, counselor name if given, phone number used, date called, and any complaint, intake, or case number.",
          "For <a href=\"https://epicla.lacounty.gov/energov_prod/selfservice/Selfservice\" target=\"_blank\" rel=\"noreferrer\">EPIC-LA</a> or <a href=\"https://ttc.lacounty.gov/business-license-requirements-2/\" target=\"_blank\" rel=\"noreferrer\">LA County Business License Requirements</a>, save the account email, application or record number, license type, business name, business address, payment receipt, submitted documents, and any page showing the current status.",
          "For non-emergency safety, crime, or parking issues through <a href=\"https://lasd.org/walnut-diamond-bar/\" target=\"_blank\" rel=\"noreferrer\">LASD Walnut/Diamond Bar Station</a>, save the station name, phone number used, date and time called, staff or deputy name if given, incident or report number, and a short note of what they told you to do next.",
          "For written public comments, save the <a href=\"https://publiccomment.bos.lacounty.gov/\" target=\"_blank\" rel=\"noreferrer\">Submit Public Comment</a> confirmation screen, comment text, attachment file names, position selected, submission time, and the meeting date and item number from <a href=\"https://bos.lacounty.gov/board-meeting-agendas/\" target=\"_blank\" rel=\"noreferrer\">Board Meeting Agendas</a>.",
          "If you may need elected-office follow-up, save the <a href=\"https://appcenter.gis.lacounty.gov/districtlocator/\" target=\"_blank\" rel=\"noreferrer\">LA County District Locator</a> result showing the address and district, plus any message sent to <a href=\"https://lacounty.gov/government/board-of-supervisors/hilda-l-solis/\" target=\"_blank\" rel=\"noreferrer\">Supervisor Hilda L. Solis, First District</a>.",
          "If the website does not give a case number, use the browser print command to save the final screen as PDF, or take a screenshot that includes the page URL, date, and visible submission message. Then write a one-line note with the time, form name, and what you submitted.",
          "Do not store sensitive information in a shared or public folder. If records include immigration details, Social Security numbers, medical information, bank information, or legal papers, keep a private copy and only attach them later if the responsible agency specifically asks.",
          "After saving proof, set the next checkpoint. If the official page gives a timeline, use that. If it does not, open the <a href=\"detail.html?section=followup&item=wait\">Wait with date</a> step and set a 5 to 10 business day reminder for routine County issues."
        ],
        waitTitle: "Wait with a date",
        waitSteps: [
          "Start from the proof you saved. Open the case folder and write three dates: submission date, official response date if one was shown, and your follow-up date. If the official page gives no timeline, use 5 to 10 business days for routine County service requests.",
          "For <a href=\"https://dpw.lacounty.gov/explore-public-works/report-a-problem/\" target=\"_blank\" rel=\"noreferrer\">Public Works Report a Problem</a>, wait with the case number, exact location, selected problem type, and photos ready. If the issue is a safety hazard that becomes urgent, do not wait for the routine reminder; call the appropriate emergency or agency number shown on the official page.",
          "For <a href=\"https://dcba.lacounty.gov/rentstabilization/\" target=\"_blank\" rel=\"noreferrer\">LA County DCBA Housing Help</a>, do not use a generic 10-day wait if you have an eviction deadline, lockout, utility shutoff, court paper, or habitability emergency. Use the phone number or help path shown by DCBA and mark the legal deadline separately.",
          "For <a href=\"https://epicla.lacounty.gov/energov_prod/selfservice/Selfservice\" target=\"_blank\" rel=\"noreferrer\">EPIC-LA</a> or <a href=\"https://ttc.lacounty.gov/business-license-requirements-2/\" target=\"_blank\" rel=\"noreferrer\">LA County Business License Requirements</a>, write the application or record number and the portal status on your reminder. Check the same portal before sending a follow-up email or calling.",
          "For non-emergency safety, crime, or parking matters handled through <a href=\"https://lasd.org/walnut-diamond-bar/\" target=\"_blank\" rel=\"noreferrer\">LASD Walnut/Diamond Bar Station</a>, wait based on what the station told you. If risk increases or there is immediate danger, call 911 instead of waiting for a callback.",
          "For written public comments, use the meeting date rather than a normal response deadline. Open <a href=\"https://bos.lacounty.gov/board-meeting-agendas/\" target=\"_blank\" rel=\"noreferrer\">Board Meeting Agendas</a> and check the agenda item before and after the meeting. Comments submitted through <a href=\"https://publiccomment.bos.lacounty.gov/\" target=\"_blank\" rel=\"noreferrer\">Submit Public Comment</a> become part of the official record, but you may not receive a personal response.",
          "For questions routed to an elected office, first confirm the district with the <a href=\"https://appcenter.gis.lacounty.gov/districtlocator/\" target=\"_blank\" rel=\"noreferrer\">LA County District Locator</a>. Then wait 7 to 10 business days after sending a clear message to <a href=\"https://lacounty.gov/government/board-of-supervisors/hilda-l-solis/\" target=\"_blank\" rel=\"noreferrer\">Supervisor Hilda L. Solis, First District</a>, unless the office gives a different timeline.",
          "Put the reminder where you will actually see it: phone calendar, paper planner, email snooze, or task app. The reminder title should include agency, issue, location, and case number, such as Follow up Public Works pothole Colima/Nogales PW-12345.",
          "On the reminder date, check the official portal, email, voicemail, and spam folder before contacting the agency. If there is a status update, save it in the case folder and set the next date from that update.",
          "If there is no update on the reminder date, move to <a href=\"detail.html?section=followup&item=follow-up\">Follow up</a>. Use the same channel first, include the case number, and ask for current status, expected next action, and the office responsible for the next step."
        ],
        templateTitle: "Follow-up note template",
        templateText: "Hello, I submitted a request about [issue] at [location] on [date]. My confirmation or case number is [number]. Could you please tell me the current status and expected next step?",
        attachTitle: "What to attach when escalating",
        attachItems: ["Original request number.", "Exact address or cross streets.", "Photos, notices, or letters.", "Dates of every call, email, and reply.", "One sentence asking which office owns the next step."],
        nextLabel: "Back to five-category home",
        nextHref: "index.html",
      },
    },
  },
  zh: {
    skip: "跳到内容",
    brandEyebrow: "罗兰岗",
    siteTitle: "罗兰岗公共事务导航",
    siteSubtitle: "在罗兰岗，帮你判断该做什么、找谁办、之后怎么追踪。",
    print: "打印",
    footer: "这是公共事务导航，不是法律建议。遇到紧急危险请拨打 911。",
    lastChecked: "为洛杉矶县管辖下的罗兰岗居民制作。内容最后核对日期：2026 年 7 月 11 日。",
    homeLabel: "首页",
    officialLinks: "官方链接",
    next: "下一类",
    chooseSubcategory: "先选你要办的事",
    openGuide: "打开这个指南",
    backToMenu: "回到这一页的菜单",
    inThisCategory: "相关事项",
    overview: "概览",
    menuOverview: "先看这里",
    menuTopics: "选择具体事项",
    nav: {
      home: "首页",
      basics: "生活流程",
      help: "问题找谁",
      participate: "公共参与",
      identity: "我能怎么参与",
      followup: "提交后追踪",
    },
    visual: {
      title: "先找对县政府办公室",
      center: "罗兰岗",
      works: "公共工程局",
      sheriff: "县警局",
      dcba: "消费者事务",
      board: "县政委员办公室",
      caption: "在罗兰岗，很多问题要找县政府办公室，而不是找市政府。",
    },
    pages: {
      home: {
        eyebrow: "罗兰岗居民导航",
        title: "先看清楚该找谁、该怎么做。",
        intro: "这个网站是给罗兰岗居民使用的办事导航。它帮助你找到正确的洛杉矶县部门，按步骤处理日常生活事项，选择合适的公共参与方式，并追踪提交后的结果。",
        purposeLabel: "这个网站可以帮你：",
        features: [
          ["找对负责机构", "道路、垃圾、治安、住房、许可等本地问题会对应到洛杉矶县相关部门。"],
          ["按步骤处理生活事项", "电话卡、银行、报税、医疗保险和驾照页面会列材料、步骤、官方链接、常见错误和下一步。"],
          ["提交后继续追踪", "公共参与和追踪页面会说明保存什么、多久后跟进、没有回复时联系谁。"],
        ],
        actions: [["我要报告问题", "help.html"], ["我要办生活事项", "basics.html"]],
        sectionEyebrow: "选择功能",
        sectionTitle: "按你现在要做的事情进入",
        sectionText: "下面五个部分就是这个网站的主要功能。选择最接近的任务即可。",
        categories: [
          ["01", "处理日常生活", "电话卡、银行账户、报税、医疗保险和加州驾照基础步骤。", "basics.html"],
          ["02", "报告本地问题", "道路、非法倾倒、许可、治安、住房和动物问题对应到县机构。", "help.html"],
          ["03", "参与公共决定", "会议、公共评论、民选官员和投票。", "participate.html"],
          ["04", "按情况选择参与方式", "按美国公民、永久居民、其他居民和不确定情况，查看可以做什么、哪些事要谨慎。", "identity.html"],
          ["05", "追踪提交后的进展", "保存凭证、带日期等待、追踪回复，并清楚升级联系。", "followup.html"],
        ],
        notices: [
          ["不需要具体身份信息", "网站只使用大类，不要求填写外国人号码、签证类型或证件。"],
          ["本地路径很重要", "罗兰岗很多事务由洛杉矶县负责，所以链接不会混用周边城市办公室。"],
          ["保留你的处理记录", "截图、案件号码、日期、姓名和邮件会让后续追踪容易很多。"],
        ],
      },
      basics: {
        breadcrumb: "生活基本流程",
        title: "电话卡、银行、报税、医疗和驾照。",
        intro: "每一项都列出准备材料、基本步骤、官方链接、常见错误，以及完成后的下一步。",
        nextLabel: "我遇到问题该找谁",
        nextHref: "help.html",
        items: [
          {
            title: "办理电话卡或手机套餐",
            description: "先查覆盖范围和手机兼容性，再按你选择的运营商流程办理。",
            prepare: ["如果想用自己的手机，先确认手机已解锁。", "准备 IMEI（手机设备识别码）或 EID（eSIM 电子卡识别码）号码。可拨 *#06#，也可以在手机设置里找。", "去门店时准备带照片身份证件。", "罗兰岗邮寄地址或使用地址，用于税费、覆盖范围和 SIM（手机卡）寄送。", "准备支付第一个月费用、SIM（手机卡）、开通费或税费的付款方式。", "如果要保留旧号码，准备旧运营商账号、transfer PIN（转号密码）、账单 ZIP code（邮编），并保持旧号码仍可使用。", "如果申请 LifeLine（电话费补助），准备收入证明或福利证明，例如 Medi-Cal（加州医疗补助）、CalFresh/SNAP（粮食补助）、SSI（补充保障收入）、住房补助或其他符合条件的文件。"],
            terms: [
              ["Prepaid（预付套餐）", "意思是先付钱，再使用服务。通常比较适合先办一个能用的号码：没有年约，流程更简单，很多情况不需要信用检查。官网可能写 Prepaid（预付）、Pay as you go（按用量付费）或预付。"],
              ["Bring your own phone/device（自带手机/设备）", "意思是使用你现在已经有的手机，不从运营商那里买新手机。官网上可能写 Bring your own phone（自带手机）、Bring your own device（自带设备）、BYOD（自带设备）、Keep your phone（保留你的手机）或 Check compatibility（检查兼容性）。"],
              ["SIM（手机卡）/ eSIM（电子手机卡）", "SIM（手机卡）是让手机接入运营商网络的实体卡或电子卡。只有官网兼容性检查确认手机支持 eSIM（电子手机卡）时才选 eSIM；不确定就选实体 SIM（实体手机卡）或去门店。"],
            ],
            steps: ["办之前先比较覆盖范围和手机兼容性，再选择一个运营商流程。"],
            stepGroups: [
              {
                title: "AT&T：用现有手机办先付费套餐",
                steps: [
                  "打开 <a href=\"https://www.att.com/maps/wireless-coverage.html\" target=\"_blank\" rel=\"noreferrer\">AT&T 覆盖地图</a>，输入罗兰岗地址，再查住处、学校、工作地点和常走路线。",
                  "打开 <a href=\"https://www.att.com/wireless/byod/\" target=\"_blank\" rel=\"noreferrer\">AT&T 自带设备页面</a>。页面里优先找 Check compatibility（检查兼容性）、Bring your own device（自带设备）或 Get started（开始），然后输入 IMEI（手机设备识别码）或 EID（eSIM 电子卡识别码）。如果你不是要买新手机，不要从 Shop phones（购买手机）开始。",
                  "打开 <a href=\"https://www.att.com/prepaid/\" target=\"_blank\" rel=\"noreferrer\">AT&T Prepaid（预付套餐）</a>。页面里优先找 Prepaid phone plans（预付手机套餐）、Shop prepaid plans（浏览预付套餐）或 Get started（开始）。选择手机套餐后，再按兼容性结果选择 Bring your own device（自带设备）、eSIM（电子手机卡）或实体 SIM（实体手机卡）。",
                  "结账时填写罗兰岗使用地址或邮寄地址、付款方式；如果保留旧号码，只在系统要求时填写旧运营商账号、transfer PIN（转号密码）和账单 ZIP code（邮编）。",
                  "拿到 SIM/eSIM（手机卡/电子手机卡）后，通过 AT&T 订单页面、门店或 app（手机应用）的官方流程激活。完成后立刻测试电话、短信、流量、语音信箱和银行验证码。"
                ],
              },
              {
                title: "T-Mobile：用现有手机办先付费套餐",
                steps: [
                  "打开 <a href=\"https://www.t-mobile.com/coverage/coverage-map\" target=\"_blank\" rel=\"noreferrer\">T-Mobile 覆盖地图</a>，输入罗兰岗地址，查住处、学校、工作地点和经常去的地方。",
                  "打开 <a href=\"https://www.t-mobile.com/resources/bring-your-own-phone\" target=\"_blank\" rel=\"noreferrer\">T-Mobile 自带手机页面</a>。页面里优先找 Check compatibility（检查兼容性）、Bring your own phone（自带手机）或 IMEI checker（设备识别码检查器），然后输入 IMEI（手机设备识别码）。如果你用现有手机，不要点 Shop phones（购买手机）。",
                  "打开 <a href=\"https://prepaid.t-mobile.com/prepaid-plans\" target=\"_blank\" rel=\"noreferrer\">T-Mobile Prepaid（预付套餐）</a>。确认自己还在 Prepaid phone plans（预付手机套餐），不要选成家庭网络、平板或手表套餐。选套餐后，再选 SIM card（实体手机卡）、eSIM（电子手机卡）或 Bring your own phone（自带手机）。",
                  "如果要转旧号码，保持旧号码仍可使用，在 T-Mobile 流程要求时再填写旧账号、transfer PIN（转号密码）和账单 ZIP code（邮编）。",
                  "通过 T-Mobile 官方结账、账户、app（手机应用）或门店流程激活。离开页面或门店前，测试电话、短信、流量、语音信箱和验证码短信。"
                ],
              },
              {
                title: "Verizon：用现有手机办先付费套餐",
                steps: [
                  "打开 <a href=\"https://www.verizon.com/coverage-map/\" target=\"_blank\" rel=\"noreferrer\">Verizon 覆盖地图</a>，输入罗兰岗地址，查你最常需要信号的地点。",
                  "如果用自己的手机，先打开 <a href=\"https://www.verizon.com/support/bring-your-own-device-faqs/\" target=\"_blank\" rel=\"noreferrer\">Verizon 自带设备说明</a>，了解 Verizon 对 BYOD（自带设备）的要求。之后在 Verizon 页面里找 Bring your own device（自带设备）、Check compatibility（检查兼容性）、Keep your phone（保留你的手机）或 IMEI check（设备识别码检查）。",
                  "打开 <a href=\"https://www.verizon.com/prepaid/plans/phone-plans/\" target=\"_blank\" rel=\"noreferrer\">Verizon Prepaid（预付套餐）</a>。确认自己选的是 Phone plans（手机套餐）和 Prepaid（预付）。如果你只想给现有手机办号码，不要选新手机或设备分期。",
                  "结账时只有 Verizon 确认手机支持 eSIM（电子手机卡）才选择 eSIM；否则选择实体 SIM（实体手机卡）或去 Verizon 门店办理。",
                  "SIM/eSIM（手机卡/电子手机卡）准备好后，通过 Verizon 官方订单、账户、app（手机应用）或门店流程激活，然后测试电话、短信、流量、语音信箱和验证码短信。"
                ],
              },
              {
                title: "费用压力大时：California LifeLine（加州生命线电话补助）",
                steps: [
                  "打开 <a href=\"https://www.californialifeline.com/en\" target=\"_blank\" rel=\"noreferrer\">California LifeLine（加州生命线电话补助）</a>，先确认自己是否按收入或福利项目符合资格。",
                  "打开 <a href=\"https://www.lifelinesupport.org/companies-near-me/\" target=\"_blank\" rel=\"noreferrer\">LifeLine（电话补助）附近服务商查询</a>，输入罗兰岗 ZIP code（邮编），选择获准提供 LifeLine（电话补助）的电话公司。",
                  "通过获准电话公司或其指向的 LifeLine（电话补助）流程申请。开始前准备收入证明或福利证明，避免申请卡住。",
                  "批准后保存申请确认、电话公司名称、电话号码、套餐内容、续期日期和客服联系方式。",
                  "如果被拒或很久没有回复，先按通知上的说明处理，再拿确认号码联系电话公司或 California LifeLine（加州生命线电话补助）支持。"
                ],
              },
            ],
            mistakes: ["没查覆盖范围和 IMEI（手机设备识别码）兼容性就先买 SIM（手机卡）。", "旧号码还没转成功就取消旧运营商服务。", "只是想要基础电话卡，却被引导到后付套餐或手机分期。", "保留旧号码时忘记旧账号、transfer PIN（转号密码）或账单 ZIP code（邮编）。", "以为所有手机都能用 eSIM（电子手机卡）。", "长期把别人的手机账户当作银行、DMV（加州车管局）或县政府表格的唯一联系号码。"],
            next: "号码能正常使用后，更新银行、DMV（加州车管局）、医疗保险、报税账户、学校、雇主和县政府表格。离线保存一张小卡片，写运营商登录方式、PIN（个人识别码）提示、套餐缴费日和紧急联系人。",
            links: [["AT&T 覆盖地图", "https://www.att.com/maps/wireless-coverage.html"], ["AT&T Prepaid（预付套餐）", "https://www.att.com/prepaid/"], ["AT&T 自带手机", "https://www.att.com/wireless/byod/"], ["T-Mobile 覆盖地图", "https://www.t-mobile.com/coverage/coverage-map"], ["T-Mobile Prepaid（预付套餐）", "https://prepaid.t-mobile.com/prepaid-plans"], ["T-Mobile 自带手机", "https://www.t-mobile.com/resources/bring-your-own-phone"], ["Verizon 覆盖地图", "https://www.verizon.com/coverage-map/"], ["Verizon Prepaid（预付套餐）", "https://www.verizon.com/prepaid/plans/phone-plans/"], ["Verizon 自带手机说明", "https://www.verizon.com/support/bring-your-own-device-faqs/"], ["California LifeLine（加州生命线电话补助）", "https://www.californialifeline.com/en"], ["LifeLine（电话补助）附近服务商", "https://www.lifelinesupport.org/companies-near-me/"]],
          },
          {
            title: "银行账户",
            description: "先选支票账户，看懂费用和开户要求，再保存账户资料。",
            prepare: ["带照片身份证件，或银行接受的替代身份证件。", "罗兰岗居住地址；如果邮寄地址不同，也准备邮寄地址。", "电话号码和电子邮箱。", "银行申请表要求时，准备社会安全号或个人报税识别号。", "表格要求时填写出生日期、工作或收入基本信息。", "如账户要求，准备第一笔存款或转账来源。", "如果去门店，身份证地址不是现住址时，最好准备地址证明。"],
            terms: [
              ["Checking account（支票账户）", "日常使用的银行账户，用来收工资、刷借记卡、交房租、付账单和转账。它和 savings（储蓄账户）不一样，储蓄账户主要是存钱。"],
              ["Monthly maintenance fee（月维护费）", "银行每月可能收的账户维护费。很多账户有免月费条件，例如 direct deposit（直接入账）、最低余额、学生年龄或关联账户。点 Open now（立即开户）前先看这一项。"],
              ["Overdraft（透支）", "账户余额不够时，交易仍然试图扣款。有的账户会允许透支并收费，有的会直接拒绝交易。看清 overdraft fee（透支费）、overdraft protection（透支保护）或 no overdraft fee（无透支费）。"],
              ["Direct deposit（直接入账）", "雇主、政府福利或其他付款方直接把钱打进账户。很多银行用 direct deposit（直接入账）作为免月费或账户优惠条件。"],
            ],
            steps: ["开户前先比较账户类型、费用和需要的文件。"],
            stepGroups: [
              {
                title: "Chase：线上开户或预约门店开户",
                steps: [
                  "打开 <a href=\"https://www.chase.com/personal/checking\" target=\"_blank\" rel=\"noreferrer\">Chase 支票账户页面</a>。确认自己在 Checking Accounts（支票账户），不要点到信用卡、储蓄、车贷或投资页面。",
                  "找 Compare checking accounts（比较支票账户），或页面里的 All / Everyday（全部/日常账户）区域。第一次办日常账户时，先比较 Chase Total Checking（Chase 普通支票账户）和 Chase Secure Banking（Chase 安全银行账户）。",
                  "在账户卡片上先看 Monthly Service Fee（每月服务费）这一行，再点 Avoid fee（避免月费）和 Account details（账户详情）。重点看月费、如何免月费、overdraft（透支）规则、ATM（自动柜员机）使用和是否支持支票。",
                  "确认适合后，再点 Open now（立即开户）。按表格填写姓名、出生日期、地址、电话、邮箱，以及 Chase 要求时的 SSN（社会安全号）/ITIN（个人报税识别号）。如果表格和你的证件情况对不上，不要乱填，改用 <a href=\"https://locator.chase.com/\" target=\"_blank\" rel=\"noreferrer\">Chase 找门店</a> 或 <a href=\"https://www.chase.com/digital/customer-service/helpful-tips/personal-banking/branch/schedule-meeting\" target=\"_blank\" rel=\"noreferrer\">预约会面</a>。",
                  "批准后保存费用表、账户协议、routing number（银行路线号码）、account number（账户号码）、网银登录方式、借记卡邮寄或领取信息，以及门店或客服联系方式。"
                ],
              },
              {
                title: "Bank of America：先填 ZIP code（邮编），再选 Advantage Banking（优势银行账户）",
                steps: [
                  "打开 <a href=\"https://www.bankofamerica.com/deposits/checking/advantage-banking/\" target=\"_blank\" rel=\"noreferrer\">Bank of America Advantage Banking（美国银行优势银行账户）</a>。页面可能会先要求输入 ZIP code（邮编），因为它要按地区显示费率和费用。",
                  "输入罗兰岗 ZIP code（邮编）；如果页面要求选择 county（县），选择 Los Angeles County（洛杉矶县）。先完成这一步，再看账户细节。",
                  "比较 Advantage Banking（优势银行账户）里面的选项。重点看 SafeBalance（安全余额账户）、Plus（增强账户）、Relationship（关系账户）、monthly maintenance fee（月维护费）、minimum balance（最低余额）、direct deposit（直接入账）、overdraft（透支）和 debit card（借记卡）。",
                  "只有看完费用后再点 Open now（立即开户）。如果不确定哪个账户适合，使用 <a href=\"https://secure.bankofamerica.com/secure-mycommunications/public/appointments/\" target=\"_blank\" rel=\"noreferrer\">预约 Bank of America</a> 或 <a href=\"https://locators.bankofamerica.com/\" target=\"_blank\" rel=\"noreferrer\">查找附近网点</a>。",
                  "批准后保存账户协议、费用表、routing number（银行路线号码）、account number（账户号码）、网银登录方式、借记卡邮寄或领取信息，以及银行工作人员或客服联系方式。"
                ],
              },
            ],
            mistakes: ["没看月费和免月费条件就直接点 Open now（立即开户）。", "需要日常刷卡、交租、收工资，却误选成 savings（储蓄账户）。", "没看 overdraft（透支）规则，之后出现手续费或付款失败。", "只依赖现金应用，不保留正式银行记录。", "填写假的地址、猜测的 SSN（社会安全号）/ITIN（个人报税识别号），或填自己无法证明的证件信息。", "开户后把账户协议、费用表、借记卡信件和银行通知丢掉。"],
            next: "开户批准后，开启存款、低余额、借记卡消费和可疑交易提醒。等账户完全批准，并保存 routing number（银行路线号码）和 account number（账户号码）后，再设置工资或福利 direct deposit（直接入账）。",
            links: [["Chase 支票账户", "https://www.chase.com/personal/checking"], ["Chase Total Checking（Chase 普通支票账户）", "https://www.chase.com/personal/checking/total-checking"], ["Chase 找门店", "https://locator.chase.com/"], ["Chase 预约会面", "https://www.chase.com/digital/customer-service/helpful-tips/personal-banking/branch/schedule-meeting"], ["Bank of America Advantage Banking（美国银行优势账户）", "https://www.bankofamerica.com/deposits/checking/advantage-banking/"], ["Bank of America 预约", "https://secure.bankofamerica.com/secure-mycommunications/public/appointments/"], ["Bank of America 网点", "https://locators.bankofamerica.com/"], ["洛杉矶县金融赋能服务", "https://dcba.lacounty.gov/financial-empowerment/"]],
          },
          {
            title: "报税",
            description: "先收齐材料，分别提交联邦税和加州税；如果欠税，还要分别向 IRS（美国国税局）和 FTB（加州税务局）付款。",
            prepare: ["W-2（工资税表）、1099（其他收入表）、1099-K（第三方收款表）、1099-NEC（非雇员收入表）、失业金、银行利息、现金收入、副业收入和自雇收入记录。", "你本人、配偶和税表上受抚养人的社会安全号或 ITIN（个人报税识别号）。", "用于退税直存或缴税的银行 routing number（银行路线号码）和 account number（账户号码）。", "上一年税表、AGI（调整后总收入）和 IRS（美国国税局）电子签名 PIN（个人识别码），如果以前报过税。", "如果用过 Covered California（加州医保市场）或 Marketplace（医保市场）医保，准备 1095-A（医保市场税表）。", "托儿、教育、捐款、退休账户、自雇、里程、房租或其他 credit/deduction（抵免/扣除）材料，如果适用。", "IRS（美国国税局）或 FTB（加州税务局）信件、以前付款确认、estimated tax（预缴税）记录和 extension（延期）确认。"],
            terms: [
              ["联邦税 vs 加州税", "罗兰岗居民通常需要分别处理 IRS（美国国税局）联邦税和 FTB（加州税务局）加州税。两个系统是分开的；提交一个不等于另一个也提交或付款。"],
              ["Refund（退税）vs Balance due（欠税）", "Refund（退税）是政府退钱给你；Balance due（欠税）是你还需要付款。如果税表显示欠税，除非报税软件已经安排付款，否则你要另外去 IRS（美国国税局）或 FTB（加州税务局）付款。"],
              ["Extension（延期）", "Extension（延期）通常只是延长提交税表的时间，不是延长缴税时间。如果欠税，仍应在截止日前尽量付款，以减少罚款和利息。"],
              ["VITA（免费报税协助）/ Free File（免费电子报税）/ CalFile（加州免费电子报税）", "VITA 是 IRS（美国国税局）认证志愿者的免费报税帮助；IRS Free File（美国国税局免费电子报税）是联邦免费电子报税；FTB CalFile（加州免费电子报税）是加州免费电子报税工具，需符合资格。"],
            ],
            steps: ["用官方材料清单收齐文件，提交联邦和加州税表；如果税表显示欠税，再分别通过 IRS 和 FTB 付款页面缴税。"],
            stepGroups: [
              {
                title: "1. 打开报税软件前先收齐材料",
                steps: [
                  "打开 IRS（美国国税局）<a href=\"https://www.irs.gov/filing/gather-your-documents\" target=\"_blank\" rel=\"noreferrer\">Gather your documents（收集材料）</a>，按官方清单收材料。把 W-2（工资税表）、1099（其他收入表）、1099-K（第三方收款表）、1099-NEC（非雇员收入表）、失业金、银行利息、现金收入、副业和自雇记录放到同一个文件夹。",
                  "如果不确定自己是否必须报税，打开 IRS（美国国税局）<a href=\"https://www.irs.gov/how-to-file-your-taxes-step-by-step\" target=\"_blank\" rel=\"noreferrer\">How to file your taxes: step by step（如何一步步报税）</a>，先看 Check if you need to file（检查是否需要报税）。",
                  "如果需要 ITIN（个人报税识别号），打开 IRS（美国国税局）<a href=\"https://www.irs.gov/forms-pubs/about-form-w-7\" target=\"_blank\" rel=\"noreferrer\">Form W-7（ITIN 申请表）</a> 并阅读最新说明；不要猜测或乱填 SSN（社会安全号）/ITIN（个人报税识别号）。"
                ],
              },
              {
                title: "2. 需要表格 PDF 时从这里进",
                steps: [
                  "联邦税表从 IRS（美国国税局）<a href=\"https://www.irs.gov/forms-instructions\" target=\"_blank\" rel=\"noreferrer\">Forms and Instructions（表格和说明）</a> 进入。常见主表是 <a href=\"https://www.irs.gov/pub/irs-pdf/f1040.pdf\" target=\"_blank\" rel=\"noreferrer\">Form 1040 PDF（个人所得税主表 PDF）</a>，说明书是 <a href=\"https://www.irs.gov/pub/irs-pdf/i1040gi.pdf\" target=\"_blank\" rel=\"noreferrer\">Form 1040 instructions PDF（1040 说明书 PDF）</a>。",
                  "如果要预缴税，看 <a href=\"https://www.irs.gov/pub/irs-pdf/f1040es.pdf\" target=\"_blank\" rel=\"noreferrer\">IRS Form 1040-ES PDF（预缴税表 PDF）</a>。如果无法一次付清并需要分期，可先记下 <a href=\"https://www.irs.gov/pub/irs-pdf/f9465.pdf\" target=\"_blank\" rel=\"noreferrer\">IRS Form 9465 PDF（分期付款申请表 PDF）</a>，但通常先用 IRS（美国国税局）在线 payment plan（付款计划）页面。",
                  "加州税表从 FTB（加州税务局）<a href=\"https://www.ftb.ca.gov/forms/index.html\" target=\"_blank\" rel=\"noreferrer\">Forms and Publications（表格和出版物）</a> 进入。常见居民税表是 <a href=\"https://www.ftb.ca.gov/forms/2025/2025-540.pdf\" target=\"_blank\" rel=\"noreferrer\">California Form 540 PDF（加州居民税表 PDF）</a>，说明书是 <a href=\"https://www.ftb.ca.gov/forms/2025/2025-540-booklet.html\" target=\"_blank\" rel=\"noreferrer\">Form 540 instruction booklet（540 说明书）</a>。",
                  "如果使用 VITA（免费报税协助）、IRS Free File（美国国税局免费电子报税）、CalFile（加州免费电子报税）或报税软件，不要从 PDF（电子表格文件）开始手填；PDF 主要用于核对表格、理解内容或纸质报税。"
                ],
              },
              {
                title: "3. 选择报税方式",
                steps: [
                  "如果想找免费人工帮助，打开洛杉矶县 DCBA（消费者与商业事务部）<a href=\"https://dcba.lacounty.gov/volunteer-income-tax-assistance/\" target=\"_blank\" rel=\"noreferrer\">VITA（免费报税协助）</a>，点击 Find Los Angeles County locations（查找洛杉矶县地点）或 Schedule an Appointment（预约）。预约时带身份证件、收入表、上一年税表和银行 routing/account number（路线号码/账户号码）。",
                  "如果自己免费报联邦税，打开 <a href=\"https://www.irs.gov/e-file-do-your-taxes-for-free\" target=\"_blank\" rel=\"noreferrer\">IRS Free File（美国国税局免费电子报税）</a>。一定从 IRS.gov（美国国税局官网）进入，选择 Guided Tax Software（引导式报税软件）或 Fillable Forms（可填写表格），并保存 IRS acceptance email（美国国税局接收确认邮件）。",
                  "如果自己报加州税，打开 <a href=\"https://www.ftb.ca.gov/file/ways-to-file/online/calfile/index.asp\" target=\"_blank\" rel=\"noreferrer\">FTB CalFile（加州免费电子报税）</a>。如果符合资格，创建或登录 MyFTB（加州税务局账户），提交加州税表，并保存 FTB confirmation（加州税务局确认号）。",
                  "如果税务情况复杂，找合格报税员。付款前确认报税员会在税表上签名，并给你完整税表副本。"
                ],
              },
              {
                title: "4. 如果欠 IRS 联邦税，钱这样交",
                steps: [
                  "打开 <a href=\"https://www.irs.gov/payments/direct-pay\" target=\"_blank\" rel=\"noreferrer\">IRS Direct Pay（美国国税局直接付款）</a>，点击 Pay individual tax（支付个人税）。这里用于支付联邦欠税、预缴税或其他个人联邦税。",
                  "Payment reason（付款原因）要选对，例如已经提交税表后的欠税选 Balance Due（欠税余额），季度预缴税选 Estimated Tax（预缴税）。Tax year（税务年度）也要选对，年份错了后续会很麻烦。",
                  "输入银行 routing/account number（路线号码/账户号码），按系统要求验证身份，核对金额和日期后提交。提交后保存或截图 IRS confirmation number（美国国税局确认号）。",
                  "如果不能一次付清，打开 IRS（美国国税局）<a href=\"https://www.irs.gov/payments/online-payment-agreement-application\" target=\"_blank\" rel=\"noreferrer\">online payment agreement（在线付款协议）</a>。即使需要分期，也应先按时提交税表。"
                ],
              },
              {
                title: "5. 如果欠加州 FTB，钱要另外交",
                steps: [
                  "打开 FTB（加州税务局）<a href=\"https://www.ftb.ca.gov/pay/index.html\" target=\"_blank\" rel=\"noreferrer\">Pay（付款）</a>。能用银行账户时优先看 Bank account / Web Pay（银行账户/网上付款），因为通常免费；信用卡可能有手续费。",
                  "选择正确 tax year（税务年度）和 payment type（付款类型）。FTB（加州税务局）提醒不同税年要分开付款，所以不要把不同年份合在一笔里交。",
                  "提交付款后保存 FTB confirmation number（加州税务局确认号）、付款日期、税年和金额。这个确认号和 IRS（美国国税局）确认号是两套东西。",
                  "如果加州税不能一次付清，先在 FTB Pay（加州税务局付款）页面选择 payment plan（付款计划），或联系 FTB（加州税务局）；不要直接不管。"
                ],
              },
              {
                title: "6. 提交后保存和追踪",
                steps: [
                  "保存联邦和加州已提交税表、e-file acceptance email（电子报税接收确认邮件）、AGI（调整后总收入）、退税或欠税金额、IRS（美国国税局）付款确认、FTB（加州税务局）付款确认和所有通知信。",
                  "查联邦退税，用 IRS（美国国税局）<a href=\"https://www.irs.gov/refunds\" target=\"_blank\" rel=\"noreferrer\">Refunds / Where's My Refund（退税查询）</a>。查加州退税，用 FTB（加州税务局）<a href=\"https://www.ftb.ca.gov/refund/index.asp\" target=\"_blank\" rel=\"noreferrer\">Where's My Refund（退税查询）</a>。",
                  "如果收到 IRS（美国国税局）或 FTB（加州税务局）信，先拿通知信和你的税表、付款确认对照，再回复；不要忽略税务信件。"
                ],
              },
            ],
            mistakes: ["只报了联邦税，忘记报加州税。", "税表显示欠税，但没有另外去 IRS（美国国税局）或 FTB（加州税务局）付款。", "以为 extension（延期）等于延期缴税。", "从随机报税网站开始，而不是从 IRS.gov（美国国税局官网）、FTB.ca.gov（加州税务局官网）或 LA County VITA（洛杉矶县免费报税协助）开始。", "漏掉 W-2（工资税表）、1099（其他收入表）、1099-K（第三方收款表）、现金收入、副业收入或失业金。", "付款时选错税年，或者把应该交给 IRS（美国国税局）的钱交给 FTB（加州税务局），反过来也一样。", "没有保存 e-file acceptance email（电子报税接收确认邮件）和付款 confirmation number（确认号）。"],
            next: "建立报税文件夹，保存税表、税务信件、IRS/FTB（美国国税局/加州税务局）付款确认、退税确认、AGI（调整后总收入）和下一年报税截止日期。如果今年欠税，下一年要考虑调整预扣税或做 estimated tax（预缴税）预缴。",
            links: [["IRS 材料清单（美国国税局材料清单）", "https://www.irs.gov/filing/gather-your-documents"], ["IRS Free File（美国国税局免费电子报税）", "https://www.irs.gov/e-file-do-your-taxes-for-free"], ["IRS Form 1040 PDF（美国国税局个人所得税主表）", "https://www.irs.gov/pub/irs-pdf/f1040.pdf"], ["IRS Form 1040 说明 PDF（1040 说明书）", "https://www.irs.gov/pub/irs-pdf/i1040gi.pdf"], ["IRS Direct Pay（美国国税局直接付款）", "https://www.irs.gov/payments/direct-pay"], ["IRS 分期付款", "https://www.irs.gov/payments/online-payment-agreement-application"], ["FTB 表格（加州税务局表格）", "https://www.ftb.ca.gov/forms/index.html"], ["California Form 540 PDF（加州居民税表）", "https://www.ftb.ca.gov/forms/2025/2025-540.pdf"], ["FTB 付款（加州税务局付款）", "https://www.ftb.ca.gov/pay/index.html"], ["FTB CalFile（加州免费电子报税）", "https://www.ftb.ca.gov/file/ways-to-file/online/calfile/index.asp"], ["LA County VITA（洛杉矶县免费报税协助）", "https://dcba.lacounty.gov/volunteer-income-tax-assistance/"]],
          },
          {
            title: "医疗保险",
            description: "先判断你应该走 Covered California（加州医保市场）私人医保、Medi-Cal（加州医疗补助）、Medicare（联邦医保），还是找免费协助再申请。",
            prepare: ["家庭人数、预计全年收入、报税信息，以及工作单位是否提供保险或保险终止通知。", "Rowland Heights（罗兰岗）居住地址、邮寄地址、电话、邮箱和需要的语言。", "申请人如果有社会安全号就准备；移民文件只在官方申请要求时、且只为申请保险的人提供。", "现有医生、诊所、常用药、怀孕需求、残障需求和紧急医疗需求。", "如果已有保险，准备保险卡、Medi-Cal Notice of Action（Medi-Cal 通知书）、BenefitsCal（加州福利系统）登录信息、Medicare（联邦医保）卡或续保信。", "如果选择 Covered California（加州医保市场）私人计划，准备付款方式，因为选好计划后通常要向保险公司支付第一笔保费。"],
            terms: [
              ["Covered California（加州医保市场）", "加州官方私人医保市场。适合自己购买保险、按 ZIP code（邮编）比较保险公司和套餐，并查看是否有补贴的人。"],
              ["Medi-Cal（加州医疗补助）", "加州 Medicaid（低收入医疗补助）。符合条件者可获得免费或低费用医疗保险，全年都可以申请，通常从 BenefitsCal（加州福利系统）或 Covered California（加州医保市场）入口开始。"],
              ["Bronze / Silver / Gold / Platinum（铜/银/金/白金等级）", "Covered California（加州医保市场）的套餐等级。Bronze（铜）通常月费较低、看病时自付较高；Gold（金）和 Platinum（白金）通常月费较高、使用时自付较低；Silver（银）对符合额外减免费用的人尤其重要。"],
              ["HMO / PPO / EPO（保险网络类型）", "保险网络规则。HMO（健康维护组织）通常要在网络内并选 primary doctor（主治医生）；PPO（优选服务组织）通常更灵活但可能更贵；EPO（专属服务组织）主要限网络内，部分专科不一定要 referral（转诊）。选之前一定查医生和药物。"],
              ["Medicare（联邦医保）", "联邦医保，主要给 65 岁或以上人士，以及部分残障、ESRD（终末期肾病）或 ALS（渐冻症）人士。如果你属于这类情况，先从 Medicare.gov（联邦医保官网）开始，不要直接从 Covered California（加州医保市场）买。"],
            ],
            steps: ["先选对路径，再从官方入口比较套餐或提交申请。"],
            stepGroups: [
              {
                title: "1. 先判断走哪条路",
                steps: [
                  "如果你 65 岁或以上，或可能因残障、ESRD（终末期肾病）、ALS（渐冻症）符合条件，先打开 <a href=\"https://www.medicare.gov/basics/get-started-with-medicare\" target=\"_blank\" rel=\"noreferrer\">Medicare: Get started（联邦医保开始页面）</a>。Medicare（联邦医保）和 Covered California（加州医保市场）不是同一套系统。",
                  "如果收入有限，先打开 <a href=\"https://www.dhcs.ca.gov/medi-cal/\" target=\"_blank\" rel=\"noreferrer\">Medi-Cal（加州医疗补助）</a>，再进 <a href=\"https://www.dhcs.ca.gov/medi-cal/apply/\" target=\"_blank\" rel=\"noreferrer\">Apply for Medi-Cal（申请加州医疗补助）</a>。Medi-Cal（加州医疗补助）可以在线、电话、邮寄或到县办公室申请。",
                  "如果你需要自己购买私人医保，打开 <a href=\"https://apply.coveredca.com/lw-shopandcompare/\" target=\"_blank\" rel=\"noreferrer\">Covered California Shop and Compare（加州医保市场比较计划）</a>。输入 91748 或你的 Rowland Heights ZIP code（罗兰岗邮编）、Los Angeles County（洛杉矶县）、家庭人数、收入、年龄和保险年份。",
                  "如果不确定，先从 <a href=\"https://www.coveredca.com/get-started/\" target=\"_blank\" rel=\"noreferrer\">Covered California（加州医保市场）Get Started（开始页面）</a> 开始，或用 <a href=\"https://www.coveredca.com/support/find-an-enroller/\" target=\"_blank\" rel=\"noreferrer\">Find an Enroller（查找认证协助人员）</a> 找认证协助人员判断应该走 Covered California（加州医保市场）、Medi-Cal（加州医疗补助）还是其他项目。"
                ],
              },
              {
                title: "2. Covered California（加州医保市场）私人医保：比较公司和套餐类型",
                steps: [
                  "在 <a href=\"https://apply.coveredca.com/lw-shopandcompare/\" target=\"_blank\" rel=\"noreferrer\">Shop and Compare（比较套餐）</a> 里先输入 Rowland Heights ZIP code（罗兰岗邮编）。页面显示出来的保险公司才是你这个 ZIP（邮编）和年份可选的公司，不要按网上通用排名乱选。",
                  "每个套餐卡片都要比较保险公司名称、金属等级、月费、deductible（自付额）、out-of-pocket maximum（年度最高自付）、看医生 copay（固定自付额）、药费，以及 HMO（健康维护组织）、PPO（优选服务组织）或 EPO（专属服务组织）网络类型。",
                  "如果不懂金属等级，先打开官方说明：<a href=\"https://www.coveredca.com/health/coverage-levels/bronze/\" target=\"_blank\" rel=\"noreferrer\">Bronze（铜）</a>、<a href=\"https://www.coveredca.com/health/coverage-levels/silver/\" target=\"_blank\" rel=\"noreferrer\">Silver（银）</a>、<a href=\"https://www.coveredca.com/health/coverage-levels/gold/\" target=\"_blank\" rel=\"noreferrer\">Gold（金）</a>、<a href=\"https://www.coveredca.com/health/coverage-levels/platinum/\" target=\"_blank\" rel=\"noreferrer\">Platinum（白金）</a>。不要只看月费最低就选。",
                  "点 enroll（加入/投保）之前，从套餐卡片里打开 provider directory（医生网络目录）和 drug list（药物清单），查你的医生、诊所、医院和药名。如果查不到，就先用 <a href=\"https://www.coveredca.com/support/find-an-enroller/\" target=\"_blank\" rel=\"noreferrer\">Find an Enroller（查找认证协助人员）</a> 或打 Covered California（加州医保市场）电话确认。",
                  "确认后从 <a href=\"https://www.coveredca.com/get-started/\" target=\"_blank\" rel=\"noreferrer\">Start Online Application（开始线上申请）</a> 开始。批准并选好计划后，通常要向保险公司支付第一笔保费。保存 application ID（申请编号）、套餐名、保险公司名、付款确认和生效日期。"
                ],
              },
              {
                title: "3. Medi-Cal（加州医疗补助）：先申请，批准后再选健康计划",
                steps: [
                  "打开 <a href=\"https://www.dhcs.ca.gov/medi-cal/apply/\" target=\"_blank\" rel=\"noreferrer\">DHCS Apply for Medi-Cal（加州卫生服务部 Medi-Cal 申请）</a>。如果你也要管理县福利，用 <a href=\"https://benefitscal.com/\" target=\"_blank\" rel=\"noreferrer\">BenefitsCal（加州福利系统）</a>；如果不确定自己是 Medi-Cal（加州医疗补助）还是私人医保，用 Covered California（加州医保市场）申请入口。",
                  "如果想电话或当面处理，用 <a href=\"https://www.dhcs.ca.gov/services/medi-cal-resources/county-offices/\" target=\"_blank\" rel=\"noreferrer\">Find Your County Medi-Cal Office（查找县 Medi-Cal 办公室）</a> 搜 Los Angeles County（洛杉矶县）。",
                  "提交后保存确认信息，并注意信件或账户消息。DHCS（加州卫生服务部）说明审核最多可能需要 45 天，县办公室可能会要求补材料。",
                  "如果批准，你会收到 Notice of Action（行动通知书）和 Benefits Identification Card (BIC)（福利识别卡）。打开 <a href=\"https://www.dhcs.ca.gov/medi-cal/use/\" target=\"_blank\" rel=\"noreferrer\">Use Your Medi-Cal（使用 Medi-Cal）</a>，确认什么时候能开始用，以及是否需要加入 Medi-Cal health plan（Medi-Cal 健康计划）。",
                  "比较 Medi-Cal（加州医疗补助）健康计划和医生网络时，用 <a href=\"https://www.healthcareoptions.dhcs.ca.gov/en\" target=\"_blank\" rel=\"noreferrer\">Health Care Options（医疗计划选择）</a>。从 health plan materials（健康计划材料）、provider search（医生/机构搜索）和 enrollment（加入计划）页面查，不要只凭公司名字猜。"
                ],
              },
              {
                title: "4. Medicare（联邦医保）：65 岁或特定残障情况要分开比较",
                steps: [
                  "打开 <a href=\"https://www.medicare.gov/basics/get-started-with-medicare\" target=\"_blank\" rel=\"noreferrer\">Get started with Medicare（开始使用联邦医保）</a>，按你的情况选择路径，例如 65 岁前已领 Social Security（社会安全金），或 65 岁后才申请。",
                  "如果要比较 Medicare Advantage（联邦医保优势计划）、Part D（处方药计划）或 Medigap（联邦医保补充险），打开 <a href=\"https://www.medicare.gov/plan-compare/\" target=\"_blank\" rel=\"noreferrer\">Medicare Plan Compare（联邦医保计划比较）</a>。输入 ZIP code（邮编）、药物、药房和医生信息后再比较。",
                  "65 岁以后不要默认 Covered California（加州医保市场）就是正确选择。如果不确定，先联系 Medicare（联邦医保）、Social Security（社会安全局）或认证辅导员，再取消旧保险或购买新保险。"
                ],
              },
              {
                title: "5. 看不懂时先找免费协助",
                steps: [
                  "用 <a href=\"https://www.coveredca.com/support/find-an-enroller/\" target=\"_blank\" rel=\"noreferrer\">Covered California（加州医保市场）Find an Enroller（查找认证协助人员）</a>，输入 Rowland Heights ZIP code（罗兰岗邮编），选择认证 enrollment counselor（投保辅导员）或 agent（保险代理）。通过 Covered California（加州医保市场）找到的协助是免费的。",
                  "Covered California（加州医保市场）电话是 (800) 300-1506。国语是 (800) 300-1533，粤语是 (800) 339-8938。这些号码来自 Covered California 官方页面。",
                  "如果是 Medi-Cal（加州医疗补助）提交后的问题，登录 <a href=\"https://benefitscal.com/\" target=\"_blank\" rel=\"noreferrer\">BenefitsCal（加州福利系统）</a>，或带 case number（案件号码）联系 <a href=\"https://www.dhcs.ca.gov/services/medi-cal-resources/county-offices/\" target=\"_blank\" rel=\"noreferrer\">Los Angeles County Medi-Cal office（洛杉矶县 Medi-Cal 办公室）</a>。",
                  "如果保险卡还没到但已经有急症，不要等。紧急情况用急救服务；非紧急情况问诊所或医院财务办公室，在申请处理中是否有可用的保险、县项目或付款协助。"
                ],
              },
            ],
            mistakes: ["只看月费最低，没有查 deductible（自付额）、年度最高自付、医生、医院和药物。", "把别的城市或别的年份可选的保险公司当成 Rowland Heights（罗兰岗）可选项。", "本来应该走 Medicare（联邦医保），却直接从 Covered California（加州医保市场）买。", "忽略 Medi-Cal（加州医疗补助）或 Covered California（加州医保市场）的信件、续保信或补材料要求。", "私人计划选好后没有付第一笔保费。", "官方申请没有要求时，给未申请保险的家庭成员乱填移民或 SSN（社会安全号）信息。", "新保险生效日没确认前就取消旧保险。"],
            next: "保存 application ID（申请编号）、case number（案件号码）、套餐名、保险公司、member ID（会员编号）、保费付款确认、生效日期、续保日期、医生网络确认和药物覆盖确认。把续保提醒放进日历，收入或家庭变化要从官方账户更新。",
            links: [["Covered California 开始申请（加州医保市场）", "https://www.coveredca.com/get-started/"], ["Covered California 比较套餐（加州医保市场）", "https://apply.coveredca.com/lw-shopandcompare/"], ["Covered California 找协助（加州医保市场）", "https://www.coveredca.com/support/find-an-enroller/"], ["Covered California Bronze（铜级计划）", "https://www.coveredca.com/health/coverage-levels/bronze/"], ["Covered California Silver（银级计划）", "https://www.coveredca.com/health/coverage-levels/silver/"], ["Covered California Gold（金级计划）", "https://www.coveredca.com/health/coverage-levels/gold/"], ["Covered California Platinum（白金级计划）", "https://www.coveredca.com/health/coverage-levels/platinum/"], ["Medi-Cal（加州医疗补助）", "https://www.dhcs.ca.gov/medi-cal/"], ["申请 Medi-Cal（加州医疗补助）", "https://www.dhcs.ca.gov/medi-cal/apply/"], ["使用 Medi-Cal（加州医疗补助）", "https://www.dhcs.ca.gov/medi-cal/use/"], ["BenefitsCal（加州福利系统）", "https://benefitscal.com/"], ["县 Medi-Cal 办公室", "https://www.dhcs.ca.gov/services/medi-cal-resources/county-offices/"], ["Health Care Options（医疗计划选择）", "https://www.healthcareoptions.dhcs.ca.gov/en"], ["Medicare 开始（联邦医保）", "https://www.medicare.gov/basics/get-started-with-medicare"], ["Medicare Plan Compare（联邦医保计划比较）", "https://www.medicare.gov/plan-compare/"]],
          },
          {
            title: "驾照",
            description: "先选对 DMV（加州车管局）驾照路径，再准备材料、在线申请、考试、路考和追踪邮寄卡片。",
            prepare: ["先判断你要办普通 Class C（普通小汽车驾照）驾照、REAL ID（真实身份驾照）、AB 60（无合法居留证明也可申请的加州驾照）驾照，还是从外州/外国驾照转成加州驾照。", "身份证明文件。去 DMV（加州车管局）前先用官方 checklist（核对清单）或 documents list（文件清单）核对。", "加州居住证明，必须显示当前地址。REAL ID（真实身份驾照）通常需要两份居住证明；其他路径至少要按 DMV（加州车管局）要求准备。", "如果你有社会安全号且 DMV（加州车管局）要求，准备 SSN（社会安全号）；AB 60（无合法居留证明也可申请的加州驾照）是给无法提供满意合法居留证明、但符合身份和加州居住要求的人。", "如果在线开始申请，准备 DMV online account（DMV 在线账户）、邮箱和能接收验证码的电话。", "如果要路考，准备注册和保险正常的车辆、保险/financial responsibility（财务责任证明）证明，以及需要时能带你去考试的持照司机。", "如果改过姓名，准备结婚、法院、收养、离婚等原件或认证副本，证明每一次姓名变化。"],
            terms: [
              ["Class C（普通小汽车驾照）", "大多数人日常开普通汽车用的非商业驾照。通常这是普通家用车的路径。"],
              ["REAL ID（真实身份驾照）", "既是驾照/身份证，也可作为联邦认可身份证明，用于美国国内航班和部分联邦设施。材料要求更严格，卡面有熊和星标。"],
              ["Federal non-compliant（非联邦合规驾照）", "可以合法开车，但不是 REAL ID（真实身份驾照）的加州驾照。它不等于 AB 60（无合法居留证明也可申请的加州驾照）；有合法居留证明的人也可能选择这种卡。"],
              ["AB 60（无合法居留证明也可申请的加州驾照）", "给无法提供满意合法居留证明、但能满足 DMV（加州车管局）身份和加州居住要求的人申请加州驾照。AB 60 不能做 REAL ID（真实身份驾照）。"],
              ["Instruction permit（练车许可）", "练车许可。成年人如果从未有过驾照，可能需要先拿 permit（练车许可），再准备 behind-the-wheel（实际道路驾驶）路考。"],
            ],
            steps: ["从符合你情况的 DMV（加州车管局）页面开始。先做线上申请，再按 DMV 要求完成材料、拍照、缴费、考试和卡片追踪。"],
            stepGroups: [
              {
                title: "1. 先判断你要走哪种驾照路径",
                steps: [
                  "打开 DMV（加州车管局）<a href=\"https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/driver-licenses-dl/\" target=\"_blank\" rel=\"noreferrer\">Driver's Licenses（驾照）</a>。重点看 18 岁以上部分：从未有过驾照、外州驾照、外国驾照、合法居留/AB 60（无合法居留证明也可申请的加州驾照）情况。",
                  "如果你想要可以作为联邦身份证明的驾照，打开 DMV（加州车管局）<a href=\"https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/real-id/\" target=\"_blank\" rel=\"noreferrer\">REAL ID（真实身份驾照）</a>。这个页面先点 Create your checklist（创建材料清单），不要直接开始乱填。",
                  "如果你无法提供满意的合法居留证明，打开 DMV（加州车管局）<a href=\"https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/assembly-bill-ab-60-driver-licenses/\" target=\"_blank\" rel=\"noreferrer\">AB 60 Driver's Licenses（AB 60 驾照）</a> 和 <a href=\"https://www.dmv.ca.gov/portal/assembly-bill-ab-60-wizard/\" target=\"_blank\" rel=\"noreferrer\">AB 60 Wizard（AB 60 材料向导）</a>，先查材料再预约。",
                  "如果你有外国驾照，也还是从 DMV（加州车管局）驾照页面走。DMV 说明外国驾照通常按外州驾照类似流程申请，但要额外通过加州路考，不能当成直接换照。"
                ],
              },
              {
                title: "2. 去 DMV（加州车管局）前先把材料按官方清单备齐",
                steps: [
                  "办 REAL ID（真实身份驾照）时，打开 <a href=\"https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/real-id/real-id-checklist/\" target=\"_blank\" rel=\"noreferrer\">REAL ID Checklist（真实身份驾照材料清单）</a>。选择身份证明、如有改名则选择改名文件、再准备两份居住证明。上传后去 DMV（加州车管局）仍然要带原件。",
                  "如果办有合法居留证明的 federal non-compliant（非联邦合规）驾照，打开 DMV（加州车管局）<a href=\"https://www.dmv.ca.gov/portal/file/federal-non-compliant-dl-id-card-documents-list-pdf/\" target=\"_blank\" rel=\"noreferrer\">Federal Non-Compliant DL/ID documents list PDF（非联邦合规驾照/身份证材料清单 PDF）</a>，确认你的原件或认证副本属于 DMV 可接受材料。",
                  "居住证明用 DMV（加州车管局）<a href=\"https://www.dmv.ca.gov/portal/file/residency-documents-list-pdf/\" target=\"_blank\" rel=\"noreferrer\">Residency Documents List PDF（居住证明清单 PDF）</a> 查。常见材料包括租约、水电/手机账单、银行记录、税表、保险文件、学校文件、医疗文件或政府信件；姓名和当前加州邮寄地址要对得上。",
                  "AB 60（无合法居留证明也可申请的加州驾照）用 <a href=\"https://www.dmv.ca.gov/portal/assembly-bill-ab-60-wizard/\" target=\"_blank\" rel=\"noreferrer\">AB 60 Wizard（AB 60 材料向导）</a> 和 <a href=\"https://www.dmv.ca.gov/portal/driver-education-and-safety/educational-materials/documents/\" target=\"_blank\" rel=\"noreferrer\">Driver License Document Resource Portal（驾照文件资源入口）</a> 查材料。如果材料不在清单里，先看 secondary review（补充审核），不要到现场才发现要补审。",
                  "如果你的现用姓名和身份证明文件不一致，把每一次姓名变化的证明原件或认证副本带齐。不要指望 DMV（加州车管局）接受非正式翻译、复印件或昵称。"
                ],
              },
              {
                title: "3. 先在线开始 DL/ID（驾照/身份证）申请",
                steps: [
                  "打开 <a href=\"https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/dl-id-online-app-edl-44/\" target=\"_blank\" rel=\"noreferrer\">Driver's License / ID Card Application（驾照/身份证申请）</a>，点击 Start Application（开始申请）。",
                  "创建或登录 DMV online account（DMV 在线账户）。准备好邮箱和电话，因为 DMV（加州车管局）会用两步验证。",
                  "选择 Driver License（驾照）和正确的卡类型。如果转 REAL ID（真实身份驾照），线上申请会要求上传身份证明和居住证明；上传后去 DMV（加州车管局）仍要带原件。",
                  "提交后保存 email（邮件）和 confirmation number（确认号码）。去 DMV（加州车管局）办事时，工作人员会用这个确认号找到你的申请。",
                  "如果线上申请不适合你的情况，不要乱猜。改用 DMV（加州车管局）现场申请流程、电话咨询或预约。"
                ],
              },
              {
                title: "4. 准备笔试、permit（练车许可）和路考预约",
                steps: [
                  "打开 DMV（加州车管局）<a href=\"https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/preparing-for-knowledge-and-drive-tests/\" target=\"_blank\" rel=\"noreferrer\">Knowledge and Drive Tests Preparation（笔试和路考准备）</a>，把它当作考试准备主页面。",
                  "打开 DMV（加州车管局）<a href=\"https://www.dmv.ca.gov/portal/driver-handbooks/\" target=\"_blank\" rel=\"noreferrer\">Driver Handbooks（驾驶手册）</a> 学 California Driver Handbook（加州驾驶手册），再用 DMV <a href=\"https://www.dmv.ca.gov/portal/driver-education-and-safety/educational-materials/sample-driver-license-dl-knowledge-tests/\" target=\"_blank\" rel=\"noreferrer\">Practice Tests（练习题）</a> 检查自己是否准备好。",
                  "如果你从未有过驾照，打开 DMV（加州车管局）<a href=\"https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/learners-permits/\" target=\"_blank\" rel=\"noreferrer\">Learner's Permits（练车许可）</a>，先确认 permit（练车许可）阶段怎么走，再准备路考。",
                  "用 DMV（加州车管局）<a href=\"https://www.dmv.ca.gov/portal/appointments/select-appointment-type/\" target=\"_blank\" rel=\"noreferrer\">Schedule Appointment（预约）</a> 预约办公室或路考。AB 60（无合法居留证明也可申请的加州驾照）如果需要 interpreter（口译员），按 DMV 页面说明打 1-800-777-0133。",
                  "去之前打开 DMV（加州车管局）<a href=\"https://www.dmv.ca.gov/portal/locations/field-offices/\" target=\"_blank\" rel=\"noreferrer\">Field Offices（办事处）</a> 搜办公室。考试不要卡点到，DMV 说明接近下班时间不提供笔试。"
                ],
              },
              {
                title: "5. 到 DMV（加州车管局）完成办理，然后追踪卡片",
                steps: [
                  "到 DMV（加州车管局）时带原件或认证副本、居住证明、confirmation number（确认号码）、支付 <a href=\"https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/licensing-fees/\" target=\"_blank\" rel=\"noreferrer\">licensing fee（驾照费用）</a> 的方式，以及所有改名证明。",
                  "现场通常会完成材料审核、指纹、视力检查、拍照、缴费，以及需要时的笔试。",
                  "路考时带保险/financial responsibility（财务责任证明）证明，并使用注册、保险、安全状态都符合要求的车辆。如果你是外国驾照，不要默认免路考。",
                  "通过后保存临时驾照。DMV（加州车管局）会邮寄正式卡；如果没收到，用 <a href=\"https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/drivers-license-id-card-status/\" target=\"_blank\" rel=\"noreferrer\">Driver's License & ID Card Status（驾照/身份证状态查询）</a> 查，或带你的信息打 DMV 电话。",
                  "正式卡收到前，保存申请确认、预约确认、收据、临时驾照、考试结果和邮寄/状态截图。"
                ],
              },
            ],
            mistakes: ["从随机驾校网页开始，而不是 DMV（加州车管局）官方申请和 checklist（核对清单）页面。", "想办 REAL ID（真实身份驾照）但没有先核对更严格的身份、改名和两份居住证明要求。", "以为 AB 60（无合法居留证明也可申请的加州驾照）等于 REAL ID（真实身份驾照），或可以用作联邦身份证明。", "带复印件，而 DMV（加州车管局）需要原件或认证副本。", "居住证明没有显示当前加州邮寄地址。", "以为外国驾照可以免加州路考。", "去 DMV（加州车管局）时忘记线上申请确认号、预约确认、付款方式，或路考保险证明。", "收到 secondary review（补充审核）或 DMV 补材料通知后不处理。"],
            next: "追踪邮寄卡片，正式卡到之前保留临时驾照，并把续期日期放进日历。如果卡片迟迟没到，用 DMV status check（DMV 状态查询）或打 1-800-777-0133。搬家后要通过 DMV（加州车管局）官方服务更新地址。",
            links: [["DMV（加州车管局）驾照总页", "https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/driver-licenses-dl/"], ["DL/ID（驾照/身份证）在线申请", "https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/dl-id-online-app-edl-44/"], ["REAL ID（真实身份驾照）", "https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/real-id/"], ["REAL ID Checklist（真实身份驾照材料清单）", "https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/real-id/real-id-checklist/"], ["AB 60（无合法居留证明也可申请的加州驾照）", "https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/assembly-bill-ab-60-driver-licenses/"], ["AB 60 Wizard（AB 60 材料向导）", "https://www.dmv.ca.gov/portal/assembly-bill-ab-60-wizard/"], ["Federal Non-Compliant（非联邦合规）材料 PDF", "https://www.dmv.ca.gov/portal/file/federal-non-compliant-dl-id-card-documents-list-pdf/"], ["Residency Documents（居住证明）PDF", "https://www.dmv.ca.gov/portal/file/residency-documents-list-pdf/"], ["Learner's Permits（练车许可）", "https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/learners-permits/"], ["Knowledge and Drive Tests（笔试和路考准备）", "https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/preparing-for-knowledge-and-drive-tests/"], ["Driver Handbooks（驾驶手册）", "https://www.dmv.ca.gov/portal/driver-handbooks/"], ["Practice Tests（练习题）", "https://www.dmv.ca.gov/portal/driver-education-and-safety/educational-materials/sample-driver-license-dl-knowledge-tests/"], ["Schedule Appointment（预约 DMV）", "https://www.dmv.ca.gov/portal/appointments/select-appointment-type/"], ["DMV（加州车管局）办公室", "https://www.dmv.ca.gov/portal/locations/field-offices/"], ["Licensing Fees（驾照费用）", "https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/licensing-fees/"], ["DL/ID（驾照/身份证）状态查询", "https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/drivers-license-id-card-status/"]],
          },
        ],
      },
      help: {
        breadcrumb: "问题找谁",
        title: "不要先找市政府。",
        intro: "罗兰岗是非建制社区，大多数本地问题要找 LA County（洛杉矶县）的具体部门或 First District（第一选区）办公室。",
        sectionEyebrow: "问题路由",
        sectionTitle: "选择问题类型。",
        sectionText: "使用准确地址或交叉路口。保存每一个确认号码。",
        selectLabel: "问题类型",
        nextLabel: "公共参与",
        nextHref: "participate.html",
        fields: ["负责机构", "电话", "线上路径", "怎样追踪", "没有回复时"],
        issues: [
          {
            id: "roads",
            label: "道路、坑洞、路灯、树木",
            title: "道路、坑洞、路灯、树木",
            values: ["LA County Public Works（洛杉矶县公共工程局）。", "Urgent requests（紧急请求）可二十四小时拨打 (800) 675-4357；官网也写作 (800) 675-HELP（HELP 是电话键盘助记词）。", "打开 <a href=\"https://dpw.lacounty.gov/explore-public-works/report-a-problem/\" target=\"_blank\" rel=\"noreferrer\">Report a Problem（报告问题）</a> 或 The Works app（洛杉矶县服务应用），提交 pothole（坑洞）、street light（路灯）、street sweeping（街道清扫）、traffic signal（交通信号）、tree trimming（修树）和 drainage（排水）问题。如果某个地方没有 marked crosswalk（斑马线/人行横道）或需要更安全的行人过街设施，选 Traffic/Pedestrian Signals（交通/行人信号），描述写：Request marked crosswalk or pedestrian safety review at [intersection/address]（请求在某交叉口/地址设置斑马线或做行人安全评估）。需要确认服务范围时，用 <a href=\"https://pw.lacounty.gov/\" target=\"_blank\" rel=\"noreferrer\">Service Locator（服务查询）</a>。", "保存 request number（请求号码）、地址或交叉路口、照片和日期。", "先通过 <a href=\"https://dpw.lacounty.gov/explore-public-works/report-a-problem/\" target=\"_blank\" rel=\"noreferrer\">Report a Problem（报告问题）</a> 或 Public Works（公共工程局）追踪；仍无回应时，带 case number（案件号码）联系 First District（第一选区）办公室。"],
            links: [["Report a Problem（报告问题）", "https://dpw.lacounty.gov/explore-public-works/report-a-problem/"], ["Service Locator（服务查询）", "https://pw.lacounty.gov/"]],
          },
          {
            id: "trash",
            label: "垃圾、非法倾倒、涂鸦",
            title: "垃圾、非法倾倒、涂鸦",
            values: ["LA County Public Works（洛杉矶县公共工程局）和 Environmental Services（环境服务）。", "使用官方 Report a Problem（报告问题）入口。有紧急危险时可打 (800) 675-4357；官网也写作 675-HELP（HELP 是电话键盘助记词）。", "graffiti（涂鸦）或 illegal dumping（非法倾倒）用 <a href=\"https://dpw.lacounty.gov/explore-public-works/report-a-problem/\" target=\"_blank\" rel=\"noreferrer\">Report Dumping（报告非法倾倒）</a>。waste collection（垃圾收集）和 authorized hauler（授权垃圾公司）问题用 <a href=\"https://pw.lacounty.gov/epd/swims/\" target=\"_blank\" rel=\"noreferrer\">Solid Waste（固体废物服务）</a>。", "保存照片、准确地点、安全情况下的车辆信息和 confirmation number（确认号码）。", "反复倾倒没有处理时，回到 <a href=\"https://dpw.lacounty.gov/explore-public-works/report-a-problem/\" target=\"_blank\" rel=\"noreferrer\">Report Dumping（报告非法倾倒）</a> 追踪，并抄送 First District（第一选区）办公室。"],
            links: [["Report Dumping（报告非法倾倒）", "https://dpw.lacounty.gov/explore-public-works/report-a-problem/"], ["Solid Waste（固体废物服务）", "https://pw.lacounty.gov/epd/swims/"]],
          },
          {
            id: "business",
            label: "商业执照和许可",
            title: "商业执照和许可",
            values: ["罗兰岗地址可能涉及 LA County Treasurer and Tax Collector（洛杉矶县财税部门）、Registrar-Recorder/County Clerk（登记记录员/县书记官）、California Secretary of State（加州州务卿）、CDTFA（加州税费管理局）、IRS（美国国税局）和 EPIC-LA/Public Works（县电子许可/公共工程局）。", "County Business License Section（县商业执照部门）：(213) 974-2011 或 <a href=\"mailto:businesslicense@ttc.lacounty.gov\">businesslicense@ttc.lacounty.gov</a>。", "先打开 <a href=\"https://ttc.lacounty.gov/business-license-requirements-2/\" target=\"_blank\" rel=\"noreferrer\">Business License Requirements（商业执照要求）</a>。用 <a href=\"https://appcenter.gis.lacounty.gov/districtlocator/\" target=\"_blank\" rel=\"noreferrer\">District Locator（辖区查询）</a> 确认地址属于 Unincorporated（非建制区）；如果经营活动需要县执照，再用 <a href=\"https://epicla.lacounty.gov/energov_prod/selfservice/Selfservice\" target=\"_blank\" rel=\"noreferrer\">Apply for a Business License（申请商业执照）</a>。", "保存 District Locator（辖区查询）结果、EPIC-LA（县电子许可系统）账号邮箱、申请号码、执照号码、FBN（商业名称）申报号码、SOS（州务卿）公司编号、EIN（雇主识别号）确认信、seller's permit（销售许可）号码、收据和机构邮件。", "如果分不清适用哪种许可，先打电话或发邮件给 County Business License Section（县商业执照部门）。如果县部门说法冲突，把地址、经营内容和官网截图发给 First District（第一选区）办公室，问下一步由哪个机构负责。"],
            process: [
              "先写下四件事再点网站：business address（经营地址）、business activity（经营内容）、business name（经营名称）和 business structure（经营结构）。经营结构是 sole proprietor（个体经营）、partnership（合伙）、LLC（有限责任公司）或 corporation（公司）。没搞清楚需要哪个政府申报前，不要先付钱给第三方网站。",
              "第一步查地址。打开 <a href=\"https://appcenter.gis.lacounty.gov/districtlocator/\" target=\"_blank\" rel=\"noreferrer\">District Locator（辖区查询）</a>，输入准确的罗兰岗经营地址，确认 Political District（政治辖区）显示 Unincorporated（非建制区）。如果显示某个 city（城市），就要走那个城市的 business license（商业执照）流程，而不是罗兰岗/LA County 这条。",
              "第二步查县执照是否需要。打开 <a href=\"https://ttc.lacounty.gov/business-license-requirements-2/\" target=\"_blank\" rel=\"noreferrer\">Business License Requirements（商业执照要求）</a>，看经营活动是否属于 County license（县执照）范围；如果需要，点页面里的 CONTINUE（继续）/ Apply for a Business License（申请商业执照）。进入 EPIC-LA（县电子许可系统）后选择 Log In（登录）或 Register（注册），完成账号后开始 business license application（商业执照申请）。",
              "如果你要成立 LLC（有限责任公司）或 corporation（公司），打开 California Secretary of State（加州州务卿）<a href=\"https://www.sos.ca.gov/business-programs/business-entities\" target=\"_blank\" rel=\"noreferrer\">Business Entities（商业实体）</a> 页面，再进 <a href=\"https://bizfileonline.sos.ca.gov/\" target=\"_blank\" rel=\"noreferrer\">bizfileOnline（加州线上公司申报系统）</a> / Form a Business（成立企业）。如果是在成立法律实体，通常要先完成这一步，再申请 EIN（雇主识别号）。",
              "如果公开使用的店名/公司名不是你的个人法定姓名或已注册实体名称，打开 LA County（洛杉矶县）<a href=\"https://www.lavote.gov/home/county-clerk/fictitious-business-names/filing\" target=\"_blank\" rel=\"noreferrer\">File a Fictitious Business Name（申报商业名称/DBA）</a>，点 GET STARTED（开始），完成身份验证、签名和付款；提交后再看 <a href=\"https://www.lavote.gov/home/county-clerk/fictitious-business-names/publication\" target=\"_blank\" rel=\"noreferrer\">Publication（公告发布）</a> 页面，避免提交后卡在公告步骤。",
              "如果需要 federal tax ID（联邦税号），打开 IRS（美国国税局）<a href=\"https://www.irs.gov/businesses/employer-identification-number\" target=\"_blank\" rel=\"noreferrer\">Employer Identification Number（雇主识别号，EIN）</a> 页面，点 Apply online（在线申请）。保存 EIN confirmation letter（EIN 确认信）。不要用收费的仿冒 EIN 网站。",
              "如果卖或出租 taxable goods（应税实物商品），打开 CDTFA（加州税费管理局）<a href=\"https://cdtfa.ca.gov/taxes-and-fees/faqseller.htm\" target=\"_blank\" rel=\"noreferrer\">Obtaining a Seller's Permit（申请销售许可）</a>，再用 <a href=\"https://onlineservices.cdtfa.ca.gov/_/\" target=\"_blank\" rel=\"noreferrer\">register online（在线注册）</a>。seller's permit（销售许可）不是 business license（商业执照），两者分开办。",
              "如果要装修、加招牌、改变场地用途、租商业空间或做土地使用事项，用 <a href=\"https://epicla.lacounty.gov/\" target=\"_blank\" rel=\"noreferrer\">EPIC-LA（县电子许可系统）</a> 和 <a href=\"https://www.calgold.ca.gov/\" target=\"_blank\" rel=\"noreferrer\">CalGold（加州许可查询工具）</a> 先查 building（建筑）、zoning（分区）、fire（消防）、health（卫生）等许可，再签租约或开工。",
              "每提交一次，就保存 confirmation screen（确认页面），写下下一步应该发生什么。没有回复时，用确认号码追问，并明确问：现在由哪个 agency（机构）负责下一步？"
            ],
            links: [["Business License Requirements（商业执照要求）", "https://ttc.lacounty.gov/business-license-requirements-2/"], ["Apply for a Business License（申请商业执照）", "https://epicla.lacounty.gov/energov_prod/selfservice/Selfservice"], ["Business License Contact（商业执照联系信息）", "https://ttc.lacounty.gov/business-license-contact/"], ["District Locator（辖区查询）", "https://appcenter.gis.lacounty.gov/districtlocator/"], ["California Secretary of State Business Entities（加州州务卿商业实体）", "https://www.sos.ca.gov/business-programs/business-entities"], ["bizfileOnline（加州线上公司申报系统）", "https://bizfileonline.sos.ca.gov/"], ["Fictitious Business Name Filing（商业名称申报）", "https://www.lavote.gov/home/county-clerk/fictitious-business-names/filing"], ["Fictitious Business Name Publication（商业名称公告）", "https://www.lavote.gov/home/county-clerk/fictitious-business-names/publication"], ["IRS EIN（美国国税局雇主识别号）", "https://www.irs.gov/businesses/employer-identification-number"], ["CDTFA Seller's Permit（销售许可）", "https://cdtfa.ca.gov/taxes-and-fees/faqseller.htm"], ["CDTFA Register Online（在线注册）", "https://onlineservices.cdtfa.ca.gov/_/"], ["EPIC-LA（县电子许可系统）", "https://epicla.lacounty.gov/"], ["CalGold（加州许可查询工具）", "https://www.calgold.ca.gov/"]],
          },
          {
            id: "safety",
            label: "治安、犯罪、停车",
            title: "治安、犯罪、停车",
            values: ["LA County Sheriff's Department（洛杉矶县警长局，LASD）的 Walnut/Diamond Bar Station（核桃/钻石吧分站）。", "Walnut（核桃）电话：(909) 595-2264。Diamond Bar（钻石吧）电话：(626) 913-1715。Emergency（紧急危险）拨打 911。", "打开 <a href=\"https://lasd.org/walnut-diamond-bar/\" target=\"_blank\" rel=\"noreferrer\">Walnut/Diamond Bar Station（核桃/钻石吧分站）</a> 页面，查看 eligible online reports（符合条件的线上报案）和 parking enforcement（停车执法）信息。", "保存 report number（报案号码）、工作人员姓名、日期，以及 <a href=\"https://lasd.org/walnut-diamond-bar/\" target=\"_blank\" rel=\"noreferrer\">分站页面</a> 上的联系方式。", "服务问题使用 <a href=\"https://lasd.org/walnut-diamond-bar/\" target=\"_blank\" rel=\"noreferrer\">分站页面</a> 引导的 Sheriff's Department complaint channels（警长局投诉渠道）；社区长期问题可联系 First District（第一选区）并在会议发言。"],
            links: [["LASD Walnut/Diamond Bar Station（县警长局核桃/钻石吧分站）", "https://lasd.org/walnut-diamond-bar/"]],
          },
          {
            id: "housing",
            label: "住房、租金、房东房客",
            title: "住房、租金、房东房客",
            values: ["LA County Department of Consumer and Business Affairs（洛杉矶县消费者与商业事务部，DCBA）。", "Housing counselors（住房咨询员）电话：(800) 593-8222，email（邮箱）<a href=\"mailto:rent@dcba.lacounty.gov\">rent@dcba.lacounty.gov</a>。", "使用 <a href=\"https://dcba.lacounty.gov/rentstabilization/\" target=\"_blank\" rel=\"noreferrer\">DCBA Housing Help（DCBA 住房帮助）</a> 处理 complaint（投诉）、mediation（调解）、rent stabilization（租金稳定）和 tenant protections（租客保护）。涉及 eviction（驱逐）或法律帮助时，用 <a href=\"https://www.stayhousedla.org/\" target=\"_blank\" rel=\"noreferrer\">Stay Housed LA（洛杉矶住房援助）</a>。", "保存 lease（租约）、notice（通知）、repair request（维修请求）、照片、短信、email（邮件）、rent receipt（租金收据）和 case number（案件号码）。", "涉及 eviction（驱逐）或 lockout（非法换锁）时，马上从 <a href=\"https://www.stayhousedla.org/\" target=\"_blank\" rel=\"noreferrer\">Stay Housed LA（洛杉矶住房援助）</a> 找法律帮助，并严格追踪所有 deadline（截止日期）。"],
            links: [["DCBA Housing Help（DCBA 住房帮助）", "https://dcba.lacounty.gov/rentstabilization/"], ["Stay Housed LA（洛杉矶住房援助）", "https://www.stayhousedla.org/"]],
          },
          {
            id: "animals",
            label: "动物问题",
            title: "动物问题",
            values: ["LA County Animal Care and Control（洛杉矶县动物照护与管制部门），或 Public Works referral links（公共工程局转介链接）。", "Immediate danger（即时危险）拨打 911。普通问题从 <a href=\"https://animalcare.lacounty.gov/\" target=\"_blank\" rel=\"noreferrer\">Animal Care（动物照护）</a> 或 <a href=\"https://dpw.lacounty.gov/explore-public-works/report-a-problem/\" target=\"_blank\" rel=\"noreferrer\">Public Works Animal Link（公共工程动物问题）</a> 开始。", "Public Works（公共工程局）会通过 <a href=\"https://dpw.lacounty.gov/explore-public-works/report-a-problem/\" target=\"_blank\" rel=\"noreferrer\">Public Works Animal Link（公共工程动物问题）</a> 把 sick（生病）、injured（受伤）、dead（死亡）或 loose animal（走失动物）报告导向县 Animal Care（动物照护）系统。", "记录 location（地点）、animal description（动物描述）、看到时间，以及是否有人有危险。", "用 case number（案件号码）和 <a href=\"https://animalcare.lacounty.gov/\" target=\"_blank\" rel=\"noreferrer\">Animal Care（动物照护）</a> 或 Public Works（公共工程局）的 agency contact（机构联系方式）追踪。"],
            links: [["Public Works Animal Link（公共工程动物问题）", "https://dpw.lacounty.gov/explore-public-works/report-a-problem/"], ["Animal Care（动物照护）", "https://animalcare.lacounty.gov/"]],
          },
        ],
      },
      participate: {
        breadcrumb: "公共参与",
        title: "即使不能投票，也仍然可以参与公共生活。",
        intro: "居民可以参加会议、提交评论、联系民选办公室；符合资格者也可以注册并投票。服务报告已经放到“问题找谁”，这里专门保留公共参与方式。",
        cards: [
          ["参加县政委员会议", "查看县政委员会议议程、会议日期、项目编号、远程参与、翻译和便利安排说明。"],
          ["提交公共评论", "书面评论会公开。选择议程项目，选择支持、反对或其他，写清楚，并保存确认信息。"],
          ["联系民选官员", "罗兰岗属于第一选区。发送简短问题说明、案件号码、官方回复和明确诉求。"],
          ["符合资格者注册投票", "先确认自己是否符合资格，再注册或检查记录，选择邮寄投票或投票中心，并追踪选票状态。"],
        ],
        meetingTitle: "开会前",
        meetingSteps: [
          "先打开 <a href=\"https://bos.lacounty.gov/board-meeting-agendas/\" target=\"_blank\" rel=\"noreferrer\">Board Meeting Agendas（县政委员会议程）</a>。选择会议日期，再打开 Agenda（议程）或 PDF。记下 agenda item number（议程项目编号）、负责部门、会议日期，以及有没有中文议程。",
          "开会前打开 <a href=\"https://bos.lacounty.gov/board-meeting-agendas/how-to-participate/\" target=\"_blank\" rel=\"noreferrer\">How to Participate（参与说明）</a>。用它选择 in-person participation（现场参与）、Webex（线上会议）、phone participation（电话参与）、只观看、written public comment（书面公共评论）、translation（翻译）或 accommodation（便利安排）。",
          "如果要远程发言，会议当天从 <a href=\"https://bos.lacounty.gov/board-meeting-agendas/\" target=\"_blank\" rel=\"noreferrer\">Board Meeting Agendas（县政委员会议程）</a> 进入，使用当天显示的 Join the Meeting（加入会议）、电话号码、access code（接入码）和 password（密码）。电话信息可能每场会议不同。",
          "如果不想发言、只想提交文字，打开 <a href=\"https://publiccomment.bos.lacounty.gov/\" target=\"_blank\" rel=\"noreferrer\">Submit Public Comment（提交公共评论）</a>。填写必填姓名，选择议程项目，选择 In Favor（支持）、Oppose（反对）或 Other（其他），检查后点 Acknowledge（确认提交），并截图保存，因为评论会成为公开记录。",
          "如果只想观看或需要现场翻译，打开 <a href=\"https://bos.lacounty.gov/board-meeting-agendas/live-broadcast/\" target=\"_blank\" rel=\"noreferrer\">Live Broadcast（直播）</a>。需要语言翻译时，进入 external player（外部播放器），再点 Language Translation（语言翻译）标签。",
          "如果需要 translator（口译员）、reasonable modification（合理调整）或 disability accommodation（残障便利安排），按 <a href=\"https://bos.lacounty.gov/board-meeting-agendas/how-to-participate/\" target=\"_blank\" rel=\"noreferrer\">How to Participate（参与说明）</a>，尽早联系 Customer Service Desk（客户服务台）：(213) 974-1411。",
          "准备一小段话：问题是什么、地点在哪里、对应哪个 agenda item number（议程项目编号）、你希望县政府做什么。如果已经报过问题，带上或上传案件号码、照片、信件、邮件和机构回复。"
        ],
        commentTitle: "提交步骤",
        commentSteps: [
          "先从 <a href=\"https://bos.lacounty.gov/board-meeting-agendas/\" target=\"_blank\" rel=\"noreferrer\">Board Meeting Agendas（县政委员会议程）</a> 开始，选择会议日期，再打开 Agenda（议程）、PDF 或中文议程。记下准确的 agenda item number（议程项目编号）和 title（项目标题）。如果你的内容不对应具体项目，就在评论系统里选 Public Comment（一般公共评论）。",
          "打开 <a href=\"https://publiccomment.bos.lacounty.gov/\" target=\"_blank\" rel=\"noreferrer\">Submit Public Comment（提交公共评论）</a>。填写必填的 First Name（名）和 Last Name（姓）。Email（邮箱）、Phone（电话）、Address（地址）、City（城市）、Organization（组织）和 Interpreter Needed（是否需要口译）可能会出现；只填写你愿意进入 public record（公开记录）的信息。",
          "如果有信件、照片或证明材料，用 Attach File（上传文件）。系统说明可以上传 Word、Excel 或 PDF supporting documents（支持文件），最多 5 个 attachments（附件）。除非必要，不要在附件里放敏感个人信息。",
          "在 Agenda Items（议程项目）表格里，勾选对应 item number（项目编号）旁边的 checkbox（复选框）。如果是一般发言，选 Public Comment（一般公共评论）。然后选择 In Favor（支持）、Oppose（反对）或 Other（其他）。",
          "评论正文用短结构写：我住/工作/上学在 Rowland Heights（罗兰岗）；我针对 item [number/title]（第几号项目/标题）或 general public comment（一般公共评论）；问题是 [一句话]；我希望 Board（县政委员会）采取 [明确行动]。",
          "点 Next（下一步），进入 verification（核对）页面后检查信息；确认无误再点 Acknowledge（确认提交）。如果有错，先返回修改，不要直接确认。",
          "出现 confirmation（确认）页面后，马上截图或打印。保存 meeting date（会议日期）、item number（项目编号）、评论正文、附件名称、submission time（提交时间）和确认信息。县官网说明书面评论会成为公开记录，并会在会议结束前后陆续链接到线上议程。"
        ],
        officialsTitle: "联系步骤",
        officialsSteps: [
          "先判断该找哪一层政府。罗兰岗道路、非法倾倒、树木、住房帮助、许可、县部门或已经提交过的 LA County（洛杉矶县）服务请求，先找 First District（第一选区）。加州法律或州机构问题找 state representatives（州议员）。联邦法律、移民机构、Social Security（社会安全）、Medicare（联邦医保）或联邦福利问题找 federal representatives（联邦民选官员）。",
          "县务问题先用 <a href=\"https://appcenter.gis.lacounty.gov/districtlocator/\" target=\"_blank\" rel=\"noreferrer\">LA County District Locator（洛杉矶县辖区查询）</a> 输入准确地址，保存显示 supervisorial district（县政委员选区）的结果、地址或交叉路口。",
          "打开 LA County（洛杉矶县）官方的 <a href=\"https://lacounty.gov/government/board-of-supervisors/hilda-l-solis/\" target=\"_blank\" rel=\"noreferrer\">Supervisor Hilda L. Solis, First District（第一选区县政委员 Hilda L. Solis）</a> 页面，或 Board（县政委员会）的 <a href=\"https://bos.lacounty.gov/executive-office/about-us/board-contact-information/\" target=\"_blank\" rel=\"noreferrer\">Board Contact Information（县政委员联系信息）</a>。可以用 firstdistrict@bos.lacounty.gov、(213) 974-4111，或 <a href=\"https://hildalsolis.org/\" target=\"_blank\" rel=\"noreferrer\">First District website（第一选区网站）</a> 寻求 constituent help（选区居民协助）。",
          "州层级问题打开 <a href=\"https://findyourrep.legislature.ca.gov/\" target=\"_blank\" rel=\"noreferrer\">Find Your California Representatives（查询加州州议员）</a>，输入罗兰岗地址，使用页面显示的 State Senate（州参议员）和 Assembly（州众议员）联系方式。",
          "联邦 House（美国众议院）问题打开 <a href=\"https://www.house.gov/representatives/find-your-representative\" target=\"_blank\" rel=\"noreferrer\">Find Your Representative（查询国会议员）</a>，输入 ZIP code（邮编）和地址。U.S. Senators（美国参议员）使用官方 <a href=\"https://www.senate.gov/senators/senators-contact.htm?State=CA\" target=\"_blank\" rel=\"noreferrer\">California Senators contact page（加州联邦参议员联系页）</a>。",
          "消息按这个顺序写：我住/工作/上学在 Rowland Heights（罗兰岗）；问题地点是 [地址/交叉路口]；我已经在 [日期] 联系过 [机构]；case number / confirmation number（案件号码/确认号码）是 [号码]；我希望你的办公室 [明确行动，例如查询状态、确认负责部门、支持某项政策改变]。",
          "附件只放有用记录：case number（案件号码）、照片、notice（通知）、机构回复、会议项目编号和日期。除非办公室明确需要做 casework（个案协助），不要主动放 immigration status（移民身份）、SSN（社会安全号）、医疗细节或私人证件。",
          "提交 contact form（联系表格）、email（邮件）或电话后，保存发出的内容、工作人员姓名、电话号码、日期，以及 casework / intake number（个案/受理号码）。如果 7 到 10 个工作日没有回复，回到同一封邮件或同一渠道追问，并附上记录，询问当前状态和下一步负责办公室。"
        ],
        votingTitle: "注册和投票步骤",
        votingSteps: [
          "先确认资格。打开 <a href=\"https://www.sos.ca.gov/elections/voting-resources/voting-california/who-can-vote-california\" target=\"_blank\" rel=\"noreferrer\">Who Can Vote in California（谁可以在加州投票）</a>。要注册并投票，你必须是 U.S. citizen（美国公民）、California resident（加州居民）、Election Day（选举日）当天年满 18 岁、没有因 felony conviction（重罪定罪）正在服 state or federal prison term（州或联邦监禁刑期），并且没有被 court（法院）认定目前 mentally incompetent to vote（无投票能力）。如果你 16 或 17 岁，并符合其他条件，可以 pre-register（预登记）。",
          "如果你不是 U.S. citizen（美国公民），不要注册，也不要投票。你仍然可以参加会议、提交 public comment（公共评论）、联系民选办公室，并通过本网站其他部分报告服务问题。",
          "符合资格者需要 voter registration（选民登记），或者确认现有登记已经是当前 Rowland Heights（罗兰岗）地址。打开 <a href=\"https://registertovote.ca.gov/?lang=en-US\" target=\"_blank\" rel=\"noreferrer\">California Online Voter Registration（加州线上选民登记）</a>。选择 Register to Vote Now（现在登记投票）、Pre-Register to Vote（预登记投票）或 Check Your Registration Status（检查登记状态）。线上登记可能需要 California driver license / ID number（加州驾照或身份证号码）、last four digits of Social Security number（社会安全号后四位）和 date of birth（出生日期）。",
          "用 <a href=\"https://voterstatus.sos.ca.gov/EN/Authenticate\" target=\"_blank\" rel=\"noreferrer\">My Voter Status（我的选民状态）</a> 检查记录。确认 name（姓名）、address（地址）、party preference（政党偏好）、language preference（语言偏好）、Vote by Mail status（邮寄投票状态）、provisional ballot status（临时选票状态）和 voting location information（投票地点信息）。",
          "尽量提前注册。<a href=\"https://www.sos.ca.gov/elections/voter-registration/\" target=\"_blank\" rel=\"noreferrer\">California Voter Registration（加州选民登记）</a> 页面说明，常规截止日期是 Election Day（选举日）前 15 天。如果错过截止日期，使用 <a href=\"https://www.sos.ca.gov/elections/voter-registration/same-day-reg\" target=\"_blank\" rel=\"noreferrer\">Same Day Voter Registration（同日选民登记 / 条件选民登记）</a>，到 county elections office（县选务办公室）、polling place（投票站）或 Vote Center（投票中心）登记并投票；县选务办公室验证登记后，选票才会计入。",
          "选择在 LA County（洛杉矶县）怎么投票。打开 <a href=\"https://www.lavote.gov/home/voting-elections/voter-education/what-to-do-before-an-election/choose-your-way-to-vote\" target=\"_blank\" rel=\"noreferrer\">Choose Your Way to Vote（选择投票方式）</a>。洛杉矶县可以在任一 Vote Center（投票中心）现场投票，也可以 Vote by Mail（邮寄投票），还可以在 Registrar（选务登记处）Norwalk（诺沃克）总部 early in-person voting（提前现场投票）。",
          "Vote by Mail（邮寄投票）：洛杉矶县会给每一位 registered voter（已登记选民）邮寄 Vote by Mail ballot（邮寄选票），寄送不晚于 Election Day（选举日）前 29 天开始。打开 <a href=\"https://www.lavote.gov/home/voting-elections/voting-options/vote-by-mail/how-to-vote-by-mail\" target=\"_blank\" rel=\"noreferrer\">How to Vote by Mail（如何邮寄投票）</a>，填写选票，放入 return envelope（回邮信封），在信封上 signature（签名），再用 mail（邮寄）、drop box（投票箱）或 Vote Center（投票中心）交回。邮寄选票必须在 Election Day（选举日）当天或之前 postmarked（盖邮戳），并在 7 天内送达县选务办公室。",
          "如果要现场投票或现场交回选票，使用 <a href=\"https://locator.lavote.gov/locations/vbm?culture=en&os=ioxa42gdub\" target=\"_blank\" rel=\"noreferrer\">LA County locator（洛杉矶县地点查询器）</a> 找 Vote Center（投票中心）或 ballot drop box（选票投递箱）。如果你手上有邮寄选票，尽量带去；如果没有，问 Vote Center staff（投票中心工作人员）应该使用哪种 ballot（选票）。",
          "需要中文或其他语言？打开 <a href=\"https://www.lavote.gov/home/voting-elections/voter-education/multilingual-services-program/multilingual-services-program\" target=\"_blank\" rel=\"noreferrer\">Multilingual Services（多语言服务）</a>。洛杉矶县可以让选民 request translated election materials（申请翻译后的选举材料），也可以在 Vote Center（投票中心）请求 language help（语言协助）。语言协助电话是 (800) 815-2666，option 3（第 3 选项）。",
          "保存凭证并追踪。保存 registration confirmation（登记确认）、My Voter Status（我的选民状态）截图、ballot tracking（选票追踪）短信或邮件、drop box / mail receipt（投递箱或邮寄凭证，如有），以及 LA County Registrar（洛杉矶县选务登记处）的 <a href=\"https://www.lavote.gov/contact-us\" target=\"_blank\" rel=\"noreferrer\">Contact Us（联系页面）</a>。登记和样本选票问题可拨 (800) 815-2666，option 2（第 2 选项）。"
        ],
        links: [["参与说明", "https://bos.lacounty.gov/board-meeting-agendas/how-to-participate/"], ["县政委员会议程", "https://bos.lacounty.gov/board-meeting-agendas/"], ["提交公共评论", "https://publiccomment.bos.lacounty.gov/"], ["直播", "https://bos.lacounty.gov/board-meeting-agendas/live-broadcast/"], ["投票资格", "https://www.sos.ca.gov/elections/voting-resources/voting-california/who-can-vote-california"], ["注册投票", "https://registertovote.ca.gov/"], ["我的选民状态", "https://voterstatus.sos.ca.gov/EN/Authenticate"], ["洛杉矶县投票方式", "https://www.lavote.gov/home/voting-elections/voter-education/what-to-do-before-an-election/choose-your-way-to-vote"]],
        nextLabel: "我能怎么参与",
        nextHref: "identity.html",
      },
      identity: {
        breadcrumb: "我能怎么参与",
        title: "按你的情况选择参与方式。",
        intro: "先选择最接近自己的大类。这里说明你可以参与哪些公共事务、哪些行动要谨慎、什么时候需要可靠法律帮助；不会要求填写具体移民身份、证件号码或签证细节。",
        cards: [
          ["美国公民", ["如果符合加州资格规则，可以注册并投票。", "可以使用完整公共参与路径：投票、提交评论、参加听证、联系第一选区、报告县服务问题。", "使用加州和洛杉矶县官方页面；每一步都保存确认信息。"]],
          ["永久居民", ["除非已经成为美国公民并符合加州投票规则，不要登记投票，也不要投票。", "仍然可以参加会议、提交公共评论、联系县办公室、报告服务问题，并在符合条件时准备入籍。", "入籍问题使用 USCIS（美国公民及移民服务局）和合格法律帮助；不要依赖 notario（非授权移民代办）或口头传闻。"]],
          ["其他居民", ["除非你是美国公民并符合加州投票规则，不要登记投票，也不要投票。", "仍然可以在不提供移民细节的情况下参与：参加会议、提交评论、报告县服务问题、联系县办公室。", "身份无关时，可使用居民、租客、工人、家长、消费者或业主等角色。"]],
          ["我不确定", ["不要猜测投票资格或身份敏感问题。", "从低风险行动开始：旁听会议、报告普通县服务问题、向机构提问，并保存记录。", "涉及移民风险的步骤，先使用洛杉矶县移民事务办公室或授权法律帮助。"]],
        ],
        citizenProcessTitle: "美国公民完整参与步骤",
        citizenSteps: [
          "先确认自己是否可以 register and vote（注册并投票）。打开 <a href=\"https://www.sos.ca.gov/elections/voter-registration/\" target=\"_blank\" rel=\"noreferrer\">California Voter Registration（加州选民登记）</a>，看 Qualifications to Register to Vote（登记投票资格）。美国公民身份不是唯一条件，还要确认 California residency（加州居民身份）、age（年龄）、felony prison term（重罪监禁刑期）和 court competency status（法院认定投票能力状态）。",
          "注册或更新地址。打开 <a href=\"https://registertovote.ca.gov/?lang=en-US\" target=\"_blank\" rel=\"noreferrer\">California Online Voter Registration（加州线上选民登记）</a>。如果还没注册，选 Register to Vote Now（现在登记投票）；如果已经注册但搬家、改名、想改 party preference（政党偏好）或 language preference（语言偏好），也用这里更新。",
          "检查记录是否真的正确。打开 <a href=\"https://voterstatus.sos.ca.gov/EN/Authenticate\" target=\"_blank\" rel=\"noreferrer\">My Voter Status（我的选民状态）</a>。保存截图，确认 address（地址）、party preference（政党偏好）、language preference（语言偏好）、Vote by Mail status（邮寄投票状态）和 voting location information（投票地点信息）。",
          "选择在 LA County（洛杉矶县）怎么投票。打开 <a href=\"https://www.lavote.gov/home/voting-elections/voter-education/what-to-do-before-an-election/choose-your-way-to-vote\" target=\"_blank\" rel=\"noreferrer\">Choose Your Way to Vote（选择投票方式）</a>。决定用 Vote Center（投票中心）、Vote by Mail（邮寄投票）还是 early in-person voting（提前现场投票）。如果用邮寄选票，按 <a href=\"https://www.lavote.gov/home/voting-elections/voting-options/vote-by-mail/how-to-vote-by-mail\" target=\"_blank\" rel=\"noreferrer\">How to Vote by Mail（如何邮寄投票）</a> 填写选票，并在 return envelope（回邮信封）上签名。",
          "找到实际投票或交回选票的地点。使用 <a href=\"https://locator.lavote.gov/locations/vbm?culture=en&os=ioxa42gdub\" target=\"_blank\" rel=\"noreferrer\">LA County locator（洛杉矶县地点查询器）</a> 查 Vote Center（投票中心）和 ballot drop box（选票投递箱）。保存地点、开放日期、时间，以及任何 receipt（收据）或 tracking notice（追踪通知）。",
          "不是所有问题都靠选举解决。遇到 County policy（县政策）、public hearing（公开听证）或会议议程事项，先打开 <a href=\"https://bos.lacounty.gov/board-meeting-agendas/\" target=\"_blank\" rel=\"noreferrer\">Board Meeting Agendas（县政委员会议程）</a>，找到 meeting date（会议日期）和 item number（项目编号），再用 <a href=\"https://publiccomment.bos.lacounty.gov/\" target=\"_blank\" rel=\"noreferrer\">Submit Public Comment（提交公共评论）</a>。保存项目编号、评论正文、附件名称和 confirmation screen（确认页面）。",
          "如果是 Rowland Heights（罗兰岗）的县服务问题或已经提交后没有解决，先用 <a href=\"https://appcenter.gis.lacounty.gov/districtlocator/\" target=\"_blank\" rel=\"noreferrer\">LA County District Locator（洛杉矶县辖区查询）</a> 确认选区，再联系 <a href=\"https://lacounty.gov/government/board-of-supervisors/hilda-l-solis/\" target=\"_blank\" rel=\"noreferrer\">Supervisor Hilda L. Solis, First District（第一选区县政委员 Hilda L. Solis）</a>。内容写清地址、交叉路口、case number（案件号码）、照片、日期和一个明确请求。",
          "形成闭环。保存 registration confirmation（登记确认）、My Voter Status（我的选民状态）截图、ballot tracking（选票追踪）、public comment confirmation（公共评论确认）、发出的 email（邮件）、工作人员姓名和 case number（案件号码）。县服务问题 7 到 10 个工作日没有回复时，回到同一封邮件或同一渠道追问。"
        ],
        permanentResidentProcessTitle: "永久居民完整参与步骤",
        permanentResidentSteps: [
          "先明确边界。Permanent resident（永久居民）不要 register to vote（登记投票），也不要 vote（投票）。如果以后成为 U.S. citizen（美国公民），再打开 <a href=\"https://www.sos.ca.gov/elections/voter-registration/\" target=\"_blank\" rel=\"noreferrer\">California Voter Registration（加州选民登记）</a> 确认投票资格后再登记。",
          "如果想了解入籍，打开 <a href=\"https://www.uscis.gov/citizenship\" target=\"_blank\" rel=\"noreferrer\">USCIS Citizenship Resource Center（USCIS 公民资源中心）</a> 和 <a href=\"https://www.uscis.gov/citizenship/learn-about-citizenship/citizenship-and-naturalization/naturalization-eligibility\" target=\"_blank\" rel=\"noreferrer\">Naturalization Eligibility（入籍资格）</a>。常见路径包括做 lawful permanent resident（合法永久居民）满 5 年，或作为 U.S. citizen spouse（美国公民配偶）做 lawful permanent resident（合法永久居民）满 3 年；还要看 age（年龄）、residence（居住）、physical presence（实际在美国居住时间）、English（英语）、civics（公民知识）和 good moral character（良好品格）等要求。",
          "如果 travel history（出入境历史）、criminal history（刑事记录）、taxes（报税）、child support（子女抚养费）、selective service（兵役登记）、以前的移民问题或长期离境可能影响案件，提交前先找 authorized legal help（授权法律帮助）。可以用 <a href=\"https://www.uscis.gov/scams-fraud-and-misconduct/avoid-scams/find-legal-services\" target=\"_blank\" rel=\"noreferrer\">USCIS Find Legal Services（USCIS 寻找法律服务）</a>、<a href=\"https://oia.lacounty.gov/immigration-fraud/\" target=\"_blank\" rel=\"noreferrer\">LA County Immigration Services Fraud（洛杉矶县移民服务诈骗说明）</a> 或 <a href=\"https://oia.lacounty.gov/representla/\" target=\"_blank\" rel=\"noreferrer\">RepresentLA（洛杉矶县移民法律帮助）</a>。不要付钱给 notario（非授权移民代办）或 immigration consultant（移民顾问）获取法律建议。",
          "如果决定申请入籍，从 <a href=\"https://www.uscis.gov/n-400\" target=\"_blank\" rel=\"noreferrer\">Form N-400, Application for Naturalization（N-400 入籍申请表）</a> 开始。先看 filing options（提交方式）、fee information（费用信息）、required evidence（所需证明）和 edition date（表格版本日期），再提交。保存 receipt notice（收件通知）和 USCIS account messages（USCIS 账户消息）。",
          "准备 interview and test（面试和考试）时，使用官方工具。打开 <a href=\"https://my.uscis.gov/citizenship/what_to_expect\" target=\"_blank\" rel=\"noreferrer\">USCIS What to Expect（USCIS 入籍流程说明）</a> 和 <a href=\"https://www.uscis.gov/citizenship/find-study-materials-and-resources/citizenship-multilingual-resources\" target=\"_blank\" rel=\"noreferrer\">Citizenship Multilingual Resources（公民考试多语言资源）</a>，查看学习材料、语言说明和面试步骤。",
          "不用投票也可以参与本地公共事务。遇到 County meeting（县会议）或 public hearing（公开听证）事项，打开 <a href=\"https://bos.lacounty.gov/board-meeting-agendas/\" target=\"_blank\" rel=\"noreferrer\">Board Meeting Agendas（县政委员会议程）</a>，找到 meeting date（会议日期）和 item number（项目编号），再用 <a href=\"https://publiccomment.bos.lacounty.gov/\" target=\"_blank\" rel=\"noreferrer\">Submit Public Comment（提交公共评论）</a>。可以使用 Rowland Heights resident（罗兰岗居民）、tenant（租客）、parent（家长）、worker（工作者）、customer（消费者）或 business owner（业主）等角色；除非必要，不要写 immigration status（移民身份）。",
          "报告县服务问题时，找对应机构。道路、路灯、树木和很多公共工程问题，从 <a href=\"https://dpw.lacounty.gov/explore-public-works/report-a-problem/\" target=\"_blank\" rel=\"noreferrer\">Public Works Report a Problem（公共工程局问题报告）</a> 开始。保存 case number（案件号码）、日期、地点、照片和 confirmation message（确认信息）。",
          "如果 Rowland Heights（罗兰岗）的县服务问题一直没有解决，先用 <a href=\"https://appcenter.gis.lacounty.gov/districtlocator/\" target=\"_blank\" rel=\"noreferrer\">LA County District Locator（洛杉矶县辖区查询）</a> 确认选区，再联系 <a href=\"https://lacounty.gov/government/board-of-supervisors/hilda-l-solis/\" target=\"_blank\" rel=\"noreferrer\">Supervisor Hilda L. Solis, First District（第一选区县政委员 Hilda L. Solis）</a>。请求他们帮你确认负责部门，或查询已有案件状态。",
          "形成闭环。保存 USCIS receipts（USCIS 收据）、legal-help intake confirmations（法律帮助受理确认）、public-comment confirmations（公共评论确认）、County case numbers（县案件号码）、agency replies（机构回复）、工作人员姓名、日期和截图。县办公室 7 到 10 个工作日没有回复时，回到同一渠道追问，并附上记录。"
        ],
        otherResidentProcessTitle: "其他居民完整参与步骤",
        otherResidentSteps: [
          "先明确投票边界。除非你是 U.S. citizen（美国公民）并符合 California voter rules（加州选民规则），不要 register to vote（登记投票），也不要 vote（投票）。如果不确定自己能不能投票，不要猜；先看 <a href=\"https://www.sos.ca.gov/elections/voting-resources/voting-california/who-can-vote-california\" target=\"_blank\" rel=\"noreferrer\">Who Can Vote in California（谁可以在加州投票）</a>，或在采取任何投票步骤前咨询 authorized legal help（授权法律帮助）。",
          "日常公共参与用非身份角色表达。可以说自己是 resident（居民）、tenant（租客）、worker（工作者）、parent（家长）、student（学生）、customer（消费者）、driver（驾驶者）、pedestrian（行人）或 business owner（业主）。除非官方流程明确要求，不要填写 immigration status（移民身份）、A-number（外国人号码）、visa type（签证类型）或私人证件。",
          "如果是 County meeting（县会议）或 policy item（政策事项），打开 <a href=\"https://bos.lacounty.gov/board-meeting-agendas/\" target=\"_blank\" rel=\"noreferrer\">Board Meeting Agendas（县政委员会议程）</a>。选择 meeting date（会议日期）、agenda item number（议程项目编号）和 department（负责部门）。如果需要 translation（翻译）、remote access（远程参与）或 accommodation（便利安排），会前先打开 <a href=\"https://bos.lacounty.gov/board-meeting-agendas/how-to-participate/\" target=\"_blank\" rel=\"noreferrer\">How to Participate（参与说明）</a>。",
          "要提交书面意见时，用 <a href=\"https://publiccomment.bos.lacounty.gov/\" target=\"_blank\" rel=\"noreferrer\">Submit Public Comment（提交公共评论）</a>。用 Rowland Heights resident（罗兰岗居民）或 affected person（受影响者）的身份写，选择议程项目，只上传必要证据，并保存 confirmation screen（确认页面），因为 written comments（书面评论）可能成为 public record（公开记录）。",
          "日常县服务问题先找负责机构，不要一开始就找政治办公室。道路、路灯、树木、非法倾倒和很多 public works issues（公共工程问题）从 <a href=\"https://dpw.lacounty.gov/explore-public-works/report-a-problem/\" target=\"_blank\" rel=\"noreferrer\">Public Works Report a Problem（公共工程局问题报告）</a> 开始。保存 case number（案件号码）、准确地点、照片、日期和 confirmation（确认信息）。",
          "如果是 housing / tenant problems（住房或租客问题），使用 <a href=\"https://dcba.lacounty.gov/rentstabilization/\" target=\"_blank\" rel=\"noreferrer\">LA County DCBA Housing Help（洛杉矶县消费者与商业事务局住房帮助）</a>。保存 lease（租约）、notice（通知）、repair request（维修请求）、照片、rent receipt（租金收据）、短信、邮件和 case number（案件号码）。如果有 eviction deadline（驱逐截止日期），马上找法律帮助。",
          "如果 Rowland Heights（罗兰岗）的县服务案件没有推进，先用 <a href=\"https://appcenter.gis.lacounty.gov/districtlocator/\" target=\"_blank\" rel=\"noreferrer\">LA County District Locator（洛杉矶县辖区查询）</a> 确认选区，再联系 <a href=\"https://lacounty.gov/government/board-of-supervisors/hilda-l-solis/\" target=\"_blank\" rel=\"noreferrer\">Supervisor Hilda L. Solis, First District（第一选区县政委员 Hilda L. Solis）</a>。请求他们帮你查询状态或确认负责部门，只附案件记录和问题事实。",
          "如果问题涉及移民风险，先看 <a href=\"https://oia.lacounty.gov/for-la-county-immigrants/\" target=\"_blank\" rel=\"noreferrer\">Resources for Los Angeles County Immigrants（洛杉矶县移民资源）</a> 或 <a href=\"https://oia.lacounty.gov/representla/\" target=\"_blank\" rel=\"noreferrer\">RepresentLA（洛杉矶县移民法律帮助）</a>。如果有人收钱、承诺结果或提供移民法律建议，先查看 <a href=\"https://oia.lacounty.gov/immigration-fraud/\" target=\"_blank\" rel=\"noreferrer\">LA County Immigration Services Fraud（洛杉矶县移民服务诈骗说明）</a>，不要急着付款或签字。",
          "形成闭环。保存 public-comment confirmations（公共评论确认）、County case numbers（县案件号码）、agency replies（机构回复）、截图、日期、工作人员姓名和电话号码。普通县服务问题 7 到 10 个工作日没有回复时，回到同一渠道追问，并附上记录。"
        ],
        notSureProcessTitle: "我不确定时的完整参与步骤",
        notSureSteps: [
          "先处理投票边界。如果不确定自己能不能投票，不要 register to vote（登记投票），也不要 vote（投票）。先看 <a href=\"https://www.sos.ca.gov/elections/voting-resources/voting-california/who-can-vote-california\" target=\"_blank\" rel=\"noreferrer\">Who Can Vote in California（谁可以在加州投票）</a>。如果看完仍然不确定，在采取任何投票步骤前先问 authorized legal help（授权法律帮助）。",
          "普通公共事务表格里不要主动写身份细节。除非官方流程明确要求并且你知道为什么要填，不要写 immigration status（移民身份）、A-number（外国人号码）、visa type（签证类型）、passport number（护照号码）、SSN（社会安全号）、医疗细节或私人证件。",
          "选择低风险角色。日常公共参与可以使用 resident（居民）、tenant（租客）、worker（工作者）、parent（家长）、student（学生）、customer（消费者）、driver（驾驶者）、pedestrian（行人）或 affected person（受影响者）。重点是说明县服务或政策如何影响你，不是证明移民身份。",
          "如果只是想先了解、不想发言，打开 <a href=\"https://bos.lacounty.gov/board-meeting-agendas/\" target=\"_blank\" rel=\"noreferrer\">Board Meeting Agendas（县政委员会议程）</a>。选择 meeting date（会议日期）和 agenda item（议程项目），再打开 <a href=\"https://bos.lacounty.gov/board-meeting-agendas/how-to-participate/\" target=\"_blank\" rel=\"noreferrer\">How to Participate（参与说明）</a>，查看观看方式、translation（翻译）、remote access（远程参与）、disability accommodation（残障便利安排）和 public comment（公共评论）说明。",
          "如果你愿意提交书面意见，用 <a href=\"https://publiccomment.bos.lacounty.gov/\" target=\"_blank\" rel=\"noreferrer\">Submit Public Comment（提交公共评论）</a>。用 Rowland Heights resident（罗兰岗居民）或 affected person（受影响者）身份写，选择议程项目，只上传必要证据，并保存 confirmation screen（确认页面），因为 public comments（公共评论）可能成为 public record（公开记录）。",
          "普通服务问题先用机构表格，不要一开始就找民选办公室。道路、路灯、树木、非法倾倒和很多 public works items（公共工程事项）从 <a href=\"https://dpw.lacounty.gov/explore-public-works/report-a-problem/\" target=\"_blank\" rel=\"noreferrer\">Public Works Report a Problem（公共工程局问题报告）</a> 开始。保存 case number（案件号码）、日期、准确地点、照片和 confirmation message（确认信息）。",
          "如果是 housing / tenant problems（住房或租客问题），使用 <a href=\"https://dcba.lacounty.gov/rentstabilization/\" target=\"_blank\" rel=\"noreferrer\">LA County DCBA Housing Help（洛杉矶县消费者与商业事务局住房帮助）</a>。如果有 eviction deadline（驱逐截止日期）、lockout（被换锁/被赶出）、threat（威胁）或 court paper（法院文件），先马上找法律帮助，再决定是否提交公共评论。",
          "如果问题涉及移民风险，先看 <a href=\"https://oia.lacounty.gov/for-la-county-immigrants/\" target=\"_blank\" rel=\"noreferrer\">Resources for Los Angeles County Immigrants（洛杉矶县移民资源）</a> 或 <a href=\"https://oia.lacounty.gov/representla/\" target=\"_blank\" rel=\"noreferrer\">RepresentLA（洛杉矶县移民法律帮助）</a>。如果有人收钱、承诺移民结果或没有授权却提供法律建议，先查 <a href=\"https://oia.lacounty.gov/immigration-fraud/\" target=\"_blank\" rel=\"noreferrer\">LA County Immigration Services Fraud（洛杉矶县移民服务诈骗说明）</a>，不要急着签字或付款。",
          "如果 Rowland Heights（罗兰岗）的县服务案件没有推进，用 <a href=\"https://appcenter.gis.lacounty.gov/districtlocator/\" target=\"_blank\" rel=\"noreferrer\">LA County District Locator（洛杉矶县辖区查询）</a> 确认选区，再联系 <a href=\"https://lacounty.gov/government/board-of-supervisors/hilda-l-solis/\" target=\"_blank\" rel=\"noreferrer\">Supervisor Hilda L. Solis, First District（第一选区县政委员 Hilda L. Solis）</a>。只问负责部门或案件状态，只附案件记录和问题事实。",
          "形成闭环。保存 agency confirmations（机构确认）、public-comment screenshots（公共评论截图）、case numbers（案件号码）、工作人员姓名、日期、email threads（邮件线程）和 phone notes（电话记录）。普通县服务问题 7 到 10 个工作日没有回复时，回到同一渠道追问，并附上记录。"
        ],
        privacyTitle: "隐私规则",
        privacyText: "普通县服务请求里，不要主动添加表格没有要求的移民细节。公共评论和会议记录可能公开。",
        links: [["移民事务办公室", "https://oia.lacounty.gov/"], ["投票资格", "https://www.sos.ca.gov/elections/voting-resources/voting-california/who-can-vote-california"]],
        nextLabel: "提交后追踪",
        nextHref: "followup.html",
      },
      followup: {
        breadcrumb: "提交后追踪",
        title: "提交表格只是第一步。",
        intro: "如果官方页面给了回复时间，先按官方时间。没有明确时间时，普通问题可以用这个节奏追踪。",
        timeline: [
          ["提交", "使用官方表格、电话或邮箱。写清地址、问题类型、日期和联系方式。"],
          ["保存凭证", "截图确认页面，记下案件号码，保存自动回复邮件。"],
          ["带日期等待", "如果官方没有给时间，普通问题可以设置五到十个工作日提醒。"],
          ["追踪", "回复确认邮件或带案件号码打电话。询问当前状态和下一步。"],
          ["清楚升级", "仍无回应时，带完整记录联系下一层负责办公室，通常可找第一选区办公室。"],
        ],
        submitTitle: "正确提交步骤",
        submitSteps: [
          "打开表格前，先写一句清楚的话：发生了什么、地点在哪里、什么时候看到、你希望修复什么。准备 exact address（准确地址）或 cross streets（交叉路口）、照片、日期，以及任何 prior case number（之前的案件号码）。",
          "先选正确官方入口。道路、potholes（坑洞）、street lights（路灯）、trees（树木）、illegal dumping（非法倾倒）、graffiti（涂鸦）、flooding（积水）、traffic / pedestrian signals（交通/行人信号）和很多县基础设施问题，打开 <a href=\"https://dpw.lacounty.gov/explore-public-works/report-a-problem/\" target=\"_blank\" rel=\"noreferrer\">Public Works Report a Problem（公共工程局问题报告）</a>。先选最接近的 problem type（问题类型），再写说明。",
          "住房、租金、tenant protections（租客保护）、维修、notice（通知）或 landlord problems（房东问题），打开 <a href=\"https://dcba.lacounty.gov/rentstabilization/\" target=\"_blank\" rel=\"noreferrer\">LA County DCBA Housing Help（洛杉矶县住房帮助）</a>。提交或打电话前，准备 lease（租约）、notice（通知）、repair request（维修请求）、rent receipt（租金收据）、照片、邮件、短信和 deadline（截止日期）。",
          "如果是在 Rowland Heights（罗兰岗）非建制地区开店或办理 business license（商业执照），先看 <a href=\"https://ttc.lacounty.gov/business-license-requirements-2/\" target=\"_blank\" rel=\"noreferrer\">LA County Business License Requirements（洛杉矶县商业执照要求）</a>。如果官网引导你申请，使用 <a href=\"https://epicla.lacounty.gov/energov_prod/selfservice/Selfservice\" target=\"_blank\" rel=\"noreferrer\">EPIC-LA（洛杉矶县线上申请系统）</a>，并保存 application / record number（申请或记录号码）。",
          "治安、crime（犯罪）或 parking enforcement（停车执法）但不是即时危险时，使用 <a href=\"https://lasd.org/walnut-diamond-bar/\" target=\"_blank\" rel=\"noreferrer\">LASD Walnut/Diamond Bar Station（县警局核桃/钻石吧分站）</a>，这个分站服务 Rowland Heights（罗兰岗）。如果有 immediate danger（即时危险），不要填网页表格，直接拨打 911。",
          "如果是 public policy（公共政策）、agenda item（议程项目）、hearing（听证）或给县政委员会的意见，先打开 <a href=\"https://bos.lacounty.gov/board-meeting-agendas/\" target=\"_blank\" rel=\"noreferrer\">Board Meeting Agendas（县政委员会议程）</a>，记下 meeting date（会议日期）和 item number（项目编号）。然后用 <a href=\"https://publiccomment.bos.lacounty.gov/\" target=\"_blank\" rel=\"noreferrer\">Submit Public Comment（提交公共评论）</a> 提交文字，并保存 confirmation screen（确认页面）。",
          "如果不确定属于哪个 County district（县选区）或民选办公室，用 <a href=\"https://appcenter.gis.lacounty.gov/districtlocator/\" target=\"_blank\" rel=\"noreferrer\">LA County District Locator（洛杉矶县辖区查询）</a> 输入准确地址。联系 First District（第一选区）或任何民选办公室前，先保存查询结果。",
          "表格要求描述时，按这个顺序写：location（地点）、problem type（问题类型）、observed time（看到时间）、safety risk（安全风险）、你已经试过什么、你请求机构做什么。除非官方表格明确要求，不要主动写 immigration status（移民身份）、SSN（社会安全号）、医疗细节或私人证件。",
          "按 Submit（提交）之前，检查地址、拼写、email（邮箱）、phone number（电话）、attachment names（附件名称）和 selected category（选择的类别）。类别选错是请求消失或被慢慢转交的常见原因。",
          "提交后立刻保存 confirmation page（确认页面）、case number（案件号码）、record number（记录号码）、email receipt（邮件收据）、submission time（提交时间）、selected category（选择的类别）、uploaded file names（上传文件名）和你提交的原文。如果没有确认号码，也要截图最后页面，并写下日期和时间。"
        ],
        saveProofTitle: "保存凭证步骤",
        saveProofSteps: [
          "在页面关闭前先建一个 case folder（案件文件夹）。命名格式建议：date（日期）+ agency（机构）+ issue（问题）+ location（地点）。例如：2026-08-01 Public Works pothole Colima-Nogales。截图、照片、收据、邮件和笔记都放在同一个文件夹里。",
          "如果用 <a href=\"https://dpw.lacounty.gov/explore-public-works/report-a-problem/\" target=\"_blank\" rel=\"noreferrer\">Public Works Report a Problem（公共工程局问题报告）</a>，保存 confirmation screen（确认页面）、selected problem type（选择的问题类型）、准确地址或交叉路口、photo names（照片文件名）、map pin（地图定位，如有）、submission date（提交日期），以及 case number（案件号码）或 email receipt（邮件收据）。",
          "如果用 <a href=\"https://dcba.lacounty.gov/rentstabilization/\" target=\"_blank\" rel=\"noreferrer\">LA County DCBA Housing Help（洛杉矶县住房帮助）</a>，保存 lease（租约）、notice（通知）、repair request（维修请求）、rent receipt（租金收据）、照片、短信、邮件、counselor name（咨询员姓名，如有）、拨打的电话号码、通话日期，以及 complaint / intake / case number（投诉/受理/案件号码）。",
          "如果用 <a href=\"https://epicla.lacounty.gov/energov_prod/selfservice/Selfservice\" target=\"_blank\" rel=\"noreferrer\">EPIC-LA（洛杉矶县线上申请系统）</a> 或 <a href=\"https://ttc.lacounty.gov/business-license-requirements-2/\" target=\"_blank\" rel=\"noreferrer\">LA County Business License Requirements（洛杉矶县商业执照要求）</a>，保存 account email（账户邮箱）、application / record number（申请或记录号码）、license type（执照类型）、business name（商号）、business address（营业地址）、payment receipt（付款收据）、已提交文件和显示 current status（当前状态）的页面。",
          "如果是非紧急治安、crime（犯罪）或 parking issue（停车问题），通过 <a href=\"https://lasd.org/walnut-diamond-bar/\" target=\"_blank\" rel=\"noreferrer\">LASD Walnut/Diamond Bar Station（县警局核桃/钻石吧分站）</a> 联系后，保存 station name（分站名称）、拨打号码、通话日期和时间、staff / deputy name（工作人员或警员姓名，如有）、incident / report number（事件或报告号码），以及他们告诉你的下一步。",
          "如果是书面公共评论，保存 <a href=\"https://publiccomment.bos.lacounty.gov/\" target=\"_blank\" rel=\"noreferrer\">Submit Public Comment（提交公共评论）</a> 的 confirmation screen（确认页面）、comment text（评论正文）、attachment file names（附件文件名）、position selected（支持/反对/其他）、submission time（提交时间），以及 <a href=\"https://bos.lacounty.gov/board-meeting-agendas/\" target=\"_blank\" rel=\"noreferrer\">Board Meeting Agendas（县政委员会议程）</a> 里的 meeting date（会议日期）和 item number（项目编号）。",
          "如果之后可能要找民选办公室跟进，保存 <a href=\"https://appcenter.gis.lacounty.gov/districtlocator/\" target=\"_blank\" rel=\"noreferrer\">LA County District Locator（洛杉矶县辖区查询）</a> 显示地址和选区的结果，以及发给 <a href=\"https://lacounty.gov/government/board-of-supervisors/hilda-l-solis/\" target=\"_blank\" rel=\"noreferrer\">Supervisor Hilda L. Solis, First District（第一选区县政委员 Hilda L. Solis）</a> 的消息。 ",
          "如果网站没有给 case number（案件号码），用浏览器打印功能把最后页面 save as PDF（另存为 PDF），或截图包含 page URL（页面网址）、date（日期）和 visible submission message（可见提交信息）的画面。然后自己写一行笔记：提交时间、表格名称、提交内容。",
          "不要把敏感资料放在 shared folder（共享文件夹）或 public folder（公开文件夹）。如果记录里有 immigration details（移民细节）、SSN（社会安全号）、医疗信息、银行信息或法律文件，先保存在私人位置；只有负责机构明确要求时再提交。",
          "保存完凭证后，立刻设下一次检查时间。如果官网给了 timeline（处理时间），按官网时间；如果没有，打开 <a href=\"detail.html?section=followup&item=wait\">带日期等待</a>，普通县服务问题先设置 5 到 10 个工作日提醒。"
        ],
        waitTitle: "带日期等待步骤",
        waitSteps: [
          "从已经保存的凭证开始。打开 case folder（案件文件夹），写下三个日期：submission date（提交日期）、official response date（官网显示的回复日期，如有）和你的 follow-up date（追踪日期）。如果官网没有 timeline（处理时间），普通县服务请求先设置 5 到 10 个 business days（工作日）提醒。",
          "如果用 <a href=\"https://dpw.lacounty.gov/explore-public-works/report-a-problem/\" target=\"_blank\" rel=\"noreferrer\">Public Works Report a Problem（公共工程局问题报告）</a>，等待时准备好 case number（案件号码）、准确地点、selected problem type（选择的问题类型）和照片。如果问题变成 safety hazard（安全危险），不要等普通提醒，按官方页面显示的紧急或机构联系方式处理。",
          "如果用 <a href=\"https://dcba.lacounty.gov/rentstabilization/\" target=\"_blank\" rel=\"noreferrer\">LA County DCBA Housing Help（洛杉矶县住房帮助）</a>，如果有 eviction deadline（驱逐截止日期）、lockout（被换锁/被赶出）、utility shutoff（水电气被停）、court paper（法院文件）或 habitability emergency（居住安全紧急问题），不要照普通 10 天等待。使用 DCBA 页面显示的电话或帮助路径，并单独标记法律截止日期。",
          "如果用 <a href=\"https://epicla.lacounty.gov/energov_prod/selfservice/Selfservice\" target=\"_blank\" rel=\"noreferrer\">EPIC-LA（洛杉矶县线上申请系统）</a> 或 <a href=\"https://ttc.lacounty.gov/business-license-requirements-2/\" target=\"_blank\" rel=\"noreferrer\">LA County Business License Requirements（洛杉矶县商业执照要求）</a>，在提醒里写 application / record number（申请或记录号码）和 portal status（系统状态）。发邮件或打电话前，先回同一个 portal（系统）查一次状态。",
          "如果是通过 <a href=\"https://lasd.org/walnut-diamond-bar/\" target=\"_blank\" rel=\"noreferrer\">LASD Walnut/Diamond Bar Station（县警局核桃/钻石吧分站）</a> 处理的非紧急治安、crime（犯罪）或 parking issue（停车问题），按分站告诉你的时间等待。如果风险增加或出现 immediate danger（即时危险），不要等回电，直接拨打 911。",
          "如果是 written public comment（书面公共评论），用 meeting date（会议日期）而不是普通回复日期。打开 <a href=\"https://bos.lacounty.gov/board-meeting-agendas/\" target=\"_blank\" rel=\"noreferrer\">Board Meeting Agendas（县政委员会议程）</a>，在会议前后查看 agenda item（议程项目）。通过 <a href=\"https://publiccomment.bos.lacounty.gov/\" target=\"_blank\" rel=\"noreferrer\">Submit Public Comment（提交公共评论）</a> 交的评论会进入 official record（官方记录），但不一定会收到个人回复。",
          "如果问题已经转给民选办公室，先用 <a href=\"https://appcenter.gis.lacounty.gov/districtlocator/\" target=\"_blank\" rel=\"noreferrer\">LA County District Locator（洛杉矶县辖区查询）</a> 确认选区。给 <a href=\"https://lacounty.gov/government/board-of-supervisors/hilda-l-solis/\" target=\"_blank\" rel=\"noreferrer\">Supervisor Hilda L. Solis, First District（第一选区县政委员 Hilda L. Solis）</a> 发出清楚信息后，除非办公室给了其他时间，否则等 7 到 10 个 business days（工作日）。",
          "把提醒放在你一定会看到的地方：phone calendar（手机日历）、paper planner（纸质计划本）、email snooze（邮件稍后提醒）或 task app（任务软件）。提醒标题要包含 agency（机构）、issue（问题）、location（地点）和 case number（案件号码），例如：Follow up Public Works pothole Colima/Nogales PW-12345。",
          "提醒日期到了以后，先查 official portal（官方系统）、email（邮箱）、voicemail（语音留言）和 spam folder（垃圾邮件）。如果有 status update（状态更新），保存到案件文件夹，并根据新状态设下一个日期。",
          "如果提醒日期到了仍然没有更新，进入 <a href=\"detail.html?section=followup&item=follow-up\">追踪</a>。先用同一个渠道联系，带上 case number（案件号码），问 current status（当前状态）、expected next action（预计下一步）和 next responsible office（下一步负责办公室）。"
        ],
        templateTitle: "追踪模板",
        templateText: "您好，我在 [日期] 提交了关于 [问题]、地点为 [地址或路口] 的请求。确认或案件号码是 [号码]。请问目前状态和下一步预计是什么？",
        attachTitle: "升级联系时附上什么",
        attachItems: ["原始请求号码。", "准确地址或交叉路口。", "照片、通知或信件。", "每次电话、邮件和回复日期。", "用一句话问清楚下一步由哪个办公室负责。"],
        nextLabel: "回到五大类首页",
        nextHref: "index.html",
      },
    },
  },
};

const sectionDetailRoutes = {
  basics: {
    collection: "items",
    ids: ["phone", "bank", "taxes", "health", "license"],
  },
  help: {
    collection: "issues",
    ids: ["roads", "trash", "business", "safety", "housing", "animals"],
  },
  participate: {
    collection: "cards",
    ids: ["meetings", "comment", "officials", "voting"],
  },
  identity: {
    collection: "cards",
    ids: ["citizen", "permanent-resident", "other-resident", "not-sure"],
  },
  followup: {
    collection: "timeline",
    ids: ["submit", "save-proof", "wait", "follow-up", "escalate"],
  },
};

function getTopLevelPageId() {
  if (pageId === "detail") return detailParams.get("section") || body.dataset.section || "";
  return navItems.some(([id]) => id === pageId) ? pageId : "home";
}

function detailHref(section, itemId) {
  return `detail.html?section=${encodeURIComponent(section)}&item=${encodeURIComponent(itemId)}`;
}

function getSectionRoute(section) {
  return sectionDetailRoutes[section];
}

function getSectionEntries(text, section) {
  const route = getSectionRoute(section);
  const page = text.pages[section];
  if (!route || !page) return [];
  return (page[route.collection] || []).map((item, index) => ({
    id: route.ids[index],
    item,
    title: getEntryTitle(item, section),
    description: getEntryDescription(item, section),
  })).filter((entry) => entry.id);
}

function getDetailEntry(text) {
  const section = detailParams.get("section") || body.dataset.section || "";
  const itemId = detailParams.get("item") || body.dataset.item || "";
  return {
    section,
    itemId,
    page: text.pages[section],
    entry: getSectionEntries(text, section).find((candidate) => candidate.id === itemId),
  };
}

function getEntryTitle(item, section) {
  if (section === "basics" || section === "help") return item.title;
  return item[0];
}

function getEntryDescription(item, section) {
  if (section === "basics") return item.description || item.steps?.[0] || item.next || "";
  if (section === "help") return item.values?.[0] || "";
  if (section === "identity") return item[1]?.[0] || "";
  return item[1] || "";
}

function html(strings, ...values) {
  return strings.reduce((output, part, index) => output + part + (values[index] ?? ""), "");
}

function list(items, ordered = false) {
  const tag = ordered ? "ol" : "ul";
  return `<${tag}>${items.map((item) => `<li>${item}</li>`).join("")}</${tag}>`;
}

function stepGroups(groups) {
  if (!groups?.length) return "";
  return `<div class="step-groups">${groups.map((group) => html`
    <section class="step-group">
      <h4>${group.title}</h4>
      ${list(group.steps, true)}
    </section>
  `).join("")}</div>`;
}

function termCards(terms) {
  if (!terms?.length) return "";
  return `<div class="term-grid">${terms.map(([title, body]) => html`
    <article class="term-card">
      <h4>${title}</h4>
      <p>${body}</p>
    </article>
  `).join("")}</div>`;
}

function officialLinks(links, label) {
  if (!links?.length) return "";
  return `<p class="official"><span>${label}</span>${links.map(([text, href]) => `<a href="${href}" target="_blank" rel="noreferrer">${text}</a>`).join("")}</p>`;
}

function renderCommon(text) {
  document.getElementById("skipLink").textContent = text.skip;
  document.getElementById("brandEyebrow").textContent = text.brandEyebrow;
  document.getElementById("siteTitle").textContent = text.siteTitle;
  document.getElementById("siteSubtitle").textContent = text.siteSubtitle;
  document.querySelectorAll("[data-language]").forEach((button) => {
    const isActive = button.dataset.language === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  document.getElementById("footerNote").textContent = text.footer;
  document.getElementById("footerDate").textContent = text.lastChecked;
  const activeSection = getTopLevelPageId();
  document.getElementById("primaryNav").innerHTML = renderMegaNav(text, activeSection);
}

function renderMegaNav(text, activeSection) {
  const homeCurrent = activeSection === "home" ? ' class="is-current"' : "";
  return html`
    <a${homeCurrent} href="index.html">${text.nav.home}</a>
    ${navItems.slice(1).map(([id, href]) => {
      const page = text.pages[id];
      const entries = getSectionEntries(text, id);
      const current = id === activeSection ? " is-current" : "";
      return html`
        <div class="nav-menu" data-menu-section="${id}">
          <button class="nav-menu-trigger${current}" type="button" data-menu-trigger="${id}" aria-expanded="false" aria-controls="mega-${id}">
            <span>${text.nav[id]}</span><span class="chevron" aria-hidden="true">v</span>
          </button>
          <div class="mega-menu" id="mega-${id}" data-menu-panel="${id}" aria-hidden="true">
            <div class="mega-menu-inner">
              <section class="mega-column">
                <h3>${text.menuOverview}</h3>
                <a href="${href}">${page.title}</a>
                <p>${page.intro}</p>
              </section>
              <section class="mega-column mega-column-wide">
                <h3>${text.menuTopics}</h3>
                <div class="mega-topic-list">
                  ${entries.map((entry) => `<a href="${detailHref(id, entry.id)}">${entry.title}</a>`).join("")}
                </div>
              </section>
            </div>
          </div>
        </div>
      `;
    }).join("")}
  `;
}

function pageHero(page, text) {
  const breadcrumb = pageId === "home" ? "" : `<p class="breadcrumb"><a href="index.html">${text.homeLabel}</a> &gt; ${page.breadcrumb}</p>`;
  return html`
    <section class="page-hero">
      ${breadcrumb}
      <p class="eyebrow">${page.eyebrow || page.breadcrumb}</p>
      <h2>${page.title}</h2>
      <p>${page.intro}</p>
    </section>
  `;
}

function agencyDiagram(text) {
  const v = text.visual;
  return html`
    <figure class="agency-diagram" aria-label="${v.title}">
      <figcaption>${v.title}</figcaption>
      <div class="route-grid" aria-hidden="true">
        <svg class="route-connectors" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="50" y1="50" x2="24" y2="22"></line>
          <line x1="50" y1="50" x2="76" y2="22"></line>
          <line x1="50" y1="50" x2="24" y2="76"></line>
          <line x1="50" y1="50" x2="76" y2="76"></line>
        </svg>
        <strong class="route-node route-center">${v.center}</strong>
        <strong class="route-node route-a">${v.works}</strong>
        <strong class="route-node route-b">${v.sheriff}</strong>
        <strong class="route-node route-c">${v.dcba}</strong>
        <strong class="route-node route-d">${v.board}</strong>
      </div>
      <p>${v.caption}</p>
    </figure>
  `;
}

function renderHome(text) {
  const page = text.pages.home;
  return html`
    <section class="hero">
      <div class="hero-copy">
        <p class="pill">${page.eyebrow}</p>
        <h2>${page.title}</h2>
        <p>${page.intro}</p>
        <div class="hero-purpose" aria-label="${page.purposeLabel}">
          <strong>${page.purposeLabel}</strong>
          <div class="purpose-list">
            ${page.features.map(([title, description], index) => html`
              <article>
                <span>${index + 1}</span>
                <div>
                  <h3>${title}</h3>
                  <p>${description}</p>
                </div>
              </article>
            `).join("")}
          </div>
        </div>
        <div class="hero-actions">
          ${page.actions.map(([label, href], index) => `<a class="${index === 0 ? "primary-action" : "secondary-action"}" href="${href}">${label}</a>`).join("")}
        </div>
      </div>
      ${agencyDiagram(text)}
    </section>
    <section class="section-shell">
      <div class="section-heading">
        <p class="eyebrow">${page.sectionEyebrow}</p>
        <h2>${page.sectionTitle}</h2>
        <p>${page.sectionText}</p>
      </div>
      <div class="category-grid">
        ${page.categories.map(([number, title, description, href]) => html`
          <a class="category-card" href="${href}">
            <span>${number}</span>
            <h3>${title}</h3>
            <p>${description}</p>
          </a>
        `).join("")}
      </div>
    </section>
    <section class="notice-row" aria-label="${page.sectionEyebrow}">
      ${page.notices.map(([title, description]) => `<article><strong>${title}</strong><span>${description}</span></article>`).join("")}
    </section>
  `;
}

function renderSectionMenu(text, section) {
  const page = text.pages[section];
  const entries = getSectionEntries(text, section);
  return pageHero(page, text) + html`
    <section class="section-shell">
      <div class="section-heading">
        <p class="eyebrow">${text.chooseSubcategory}</p>
        <h2>${page.sectionTitle || page.title}</h2>
        <p>${page.sectionText || page.intro}</p>
      </div>
      <div class="subcategory-grid">
        ${entries.map((entry, index) => html`
          <a class="subcategory-card" href="${detailHref(section, entry.id)}">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <h3>${entry.title}</h3>
            <p>${entry.description}</p>
            <strong>${text.openGuide}</strong>
          </a>
        `).join("")}
      </div>
    </section>
    ${nextCard(page, text)}
  `;
}

function renderBasics(text) { return renderSectionMenu(text, "basics"); }
function renderHelp(text) { return renderSectionMenu(text, "help"); }
function renderParticipate(text) { return renderSectionMenu(text, "participate"); }
function renderIdentity(text) { return renderSectionMenu(text, "identity"); }
function renderFollowup(text) { return renderSectionMenu(text, "followup"); }

function renderDetail(text) {
  const { section, page, entry } = getDetailEntry(text);
  if (!page || !entry) return renderHome(text);
  const sectionHref = `${section}.html`;
  return html`
    <section class="page-hero detail-hero">
      <p class="breadcrumb"><a href="index.html">${text.homeLabel}</a> &gt; <a href="${sectionHref}">${page.breadcrumb}</a> &gt; ${entry.title}</p>
      <p class="eyebrow">${page.breadcrumb}</p>
      <h2>${entry.title}</h2>
      <p>${entry.description}</p>
    </section>
    <section class="section-shell detail-layout">
      <article class="detail-main">
        ${renderDetailBody(text, section, page, entry.item)}
      </article>
      <aside class="detail-sidebar">
        <a class="back-link" href="${sectionHref}">${text.backToMenu}</a>
        <h3>${text.inThisCategory}</h3>
        <nav class="topic-list" aria-label="${text.inThisCategory}">
          ${getSectionEntries(text, section).map((candidate) => {
            const current = candidate.id === entry.id ? ' class="is-current"' : "";
            return `<a${current} href="${detailHref(section, candidate.id)}">${candidate.title}</a>`;
          }).join("")}
        </nav>
      </aside>
    </section>
  `;
}

function renderDetailBody(text, section, page, item) {
  if (section === "basics") {
    return html`
      <h3>${currentLanguage === "en" ? "Prepare" : "准备材料"}</h3>${list(item.prepare)}
      ${item.terms ? `<h3>${currentLanguage === "en" ? "Official-site words" : "先看懂官网常见词"}</h3>${termCards(item.terms)}` : ""}
      <h3>${currentLanguage === "en" ? "Complete steps" : "完整步骤"}</h3>${item.stepGroups ? stepGroups(item.stepGroups) : list(item.steps, true)}
      <h3>${currentLanguage === "en" ? "Common mistakes" : "常见错误"}</h3>${list(item.mistakes)}
      <h3>${currentLanguage === "en" ? "Next action" : "下一步"}</h3>
      <p>${item.next}</p>
      ${officialLinks(item.links, text.officialLinks)}
    `;
  }
  if (section === "help") {
    return html`
      <dl>
        ${page.fields.map((field, index) => `<dt>${field}</dt><dd>${item.values[index]}</dd>`).join("")}
      </dl>
      ${item.process ? `<h3>${currentLanguage === "en" ? "Complete setup route" : "完整办理路线"}</h3>${list(item.process, true)}` : ""}
    `;
  }
  if (section === "participate") {
    const [title, description] = item;
    const isMeetingGuide = title === page.cards[0][0];
    const isCommentGuide = title === page.cards[1][0];
    const isOfficialsGuide = title === page.cards[2][0];
    const isVotingGuide = title === page.cards[3][0];
    const guideTitle = isMeetingGuide ? page.meetingTitle : isCommentGuide ? page.commentTitle : isOfficialsGuide ? page.officialsTitle : isVotingGuide ? page.votingTitle : "";
    const guideSteps = isMeetingGuide ? page.meetingSteps : isCommentGuide ? page.commentSteps : isOfficialsGuide ? page.officialsSteps : isVotingGuide ? page.votingSteps : null;
    const guideDetail = guideSteps ? `<h3>${guideTitle}</h3>${list(guideSteps, true)}` : "";
    return html`
      <h3>${text.overview}</h3>
      <p>${description}</p>
      ${guideDetail}
      ${isMeetingGuide || isCommentGuide || isOfficialsGuide || isVotingGuide ? "" : officialLinks(page.links, text.officialLinks)}
    `;
  }
  if (section === "identity") {
    const [title, items] = item;
    const isCitizenPath = title === page.cards[0][0];
    const isPermanentResidentPath = title === page.cards[1][0];
    const isOtherResidentPath = title === page.cards[2][0];
    const isNotSurePath = title === page.cards[3][0];
    const processTitle = isCitizenPath ? page.citizenProcessTitle : isPermanentResidentPath ? page.permanentResidentProcessTitle : isOtherResidentPath ? page.otherResidentProcessTitle : isNotSurePath ? page.notSureProcessTitle : "";
    const processSteps = isCitizenPath ? page.citizenSteps : isPermanentResidentPath ? page.permanentResidentSteps : isOtherResidentPath ? page.otherResidentSteps : isNotSurePath ? page.notSureSteps : null;
    const identityProcess = processSteps ? `<h3>${processTitle}</h3>${list(processSteps, true)}` : "";
    return html`
      ${list(items)}
      ${identityProcess}
      <h3>${page.privacyTitle}</h3>
      <p>${page.privacyText}</p>
      ${isCitizenPath || isPermanentResidentPath || isOtherResidentPath || isNotSurePath ? "" : officialLinks(page.links, text.officialLinks)}
    `;
  }
  if (section === "followup") {
    const [title, description] = item;
    const isSubmitGuide = title === page.timeline[0][0];
    const isSaveProofGuide = title === page.timeline[1][0];
    const isWaitGuide = title === page.timeline[2][0];
    const processTitle = isSubmitGuide ? page.submitTitle : isSaveProofGuide ? page.saveProofTitle : isWaitGuide ? page.waitTitle : "";
    const processSteps = isSubmitGuide ? page.submitSteps : isSaveProofGuide ? page.saveProofSteps : isWaitGuide ? page.waitSteps : null;
    const followupProcess = processSteps ? `<h3>${processTitle}</h3>${list(processSteps, true)}` : "";
    return html`
      <h3>${text.overview}</h3>
      <p>${description}</p>
      ${followupProcess}
      <h3>${page.templateTitle}</h3>
      <p>${page.templateText}</p>
      <h3>${page.attachTitle}</h3>
      ${list(page.attachItems)}
    `;
  }
  return "";
}

function nextCard(page, text) {
  return `<section class="next-card"><a href="${page.nextHref}">${text.next}: ${page.nextLabel}</a></section>`;
}

function renderPage() {
  const text = i18n[currentLanguage];
  renderCommon(text);
  const renderers = {
    home: renderHome,
    basics: renderBasics,
    help: renderHelp,
    participate: renderParticipate,
    identity: renderIdentity,
    followup: renderFollowup,
    detail: renderDetail,
  };
  document.getElementById("main").innerHTML = (renderers[pageId] || renderHome)(text);
  document.documentElement.lang = currentLanguage === "zh" ? "zh-Hans" : "en";
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => {
    currentLanguage = button.dataset.language === "zh" ? "zh" : "en";
    storeLanguage(currentLanguage);
    renderPage();
  });
});

document.getElementById("printPage")?.addEventListener("click", () => window.print());

function closeMegaMenus() {
  document.querySelectorAll("[data-menu-panel]").forEach((panel) => {
    panel.classList.remove("is-open");
    panel.setAttribute("aria-hidden", "true");
  });
  document.querySelectorAll("[data-menu-trigger]").forEach((trigger) => {
    trigger.setAttribute("aria-expanded", "false");
  });
}

function toggleMegaMenu(section) {
  const panel = document.querySelector(`[data-menu-panel="${section}"]`);
  const trigger = document.querySelector(`[data-menu-trigger="${section}"]`);
  if (!panel || !trigger) return;
  const shouldOpen = !panel.classList.contains("is-open");
  closeMegaMenus();
  if (shouldOpen) {
    panel.classList.add("is-open");
    panel.setAttribute("aria-hidden", "false");
  }
  trigger.setAttribute("aria-expanded", String(shouldOpen));
}

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-menu-trigger]");
  if (trigger) {
    toggleMegaMenu(trigger.dataset.menuTrigger);
    return;
  }
  const navLink = event.target.closest("#primaryNav a");
  if (navLink) {
    closeMegaMenus();
    return;
  }
  if (!event.target.closest("#primaryNav")) closeMegaMenus();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMegaMenus();
});

document.addEventListener("change", (event) => {
  if (event.target.id !== "issueSelect") return;
  document.querySelectorAll(".issue-panel").forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.issue === event.target.value);
  });
});

function resetDetailViewport() {
  if (pageId !== "detail") return;
  window.requestAnimationFrame(() => {
    closeMegaMenus();
    if (!window.location.hash) window.scrollTo({ top: 0, left: 0 });
  });
}

window.addEventListener("pageshow", resetDetailViewport);

renderPage();
resetDetailViewport();
