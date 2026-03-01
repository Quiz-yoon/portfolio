# Gift Voucher Localization

## Stabilizing Redemption Experience to Increase Gift Repurchase: 0 Abuse Cases, 90% Time Awareness

We solved two critical problems while expanding LINE Gift Shop from Taiwan to Thailand. Thailand's completely different store environment created distinct challenges before and after launch. We addressed technical constraints pre-launch and user awareness issues post-launch.

**Problem 1: Technical Constraints Discovered Pre-Launch (Early 2024-2025)**

Thai stores had a mixed environment of POS systems. Real-time verification was impossible, creating multi-store abuse risks. We designed a **15-minute** auto-complete system and experience-based security. We established store operation guidelines with **100+ brand partners**. After April 2025 launch, we achieved **0 abuse cases**.

**Problem 2: User Timing Awareness Issues Discovered Post-Launch (July-September 2025)**

The popup's UX writing at launch was unclear and lacked context. This resulted in **91 CS cases**. We conducted UT with **105 participants**. We improved by providing information on the pre-redemption page. After December 2025 launch, time awareness improved from **67% to 90%**, and CS cases decreased.

**Year**  
2024 - 2025

**Company**  
LINE

**Category**  
E-Commerce, Gift Shop

**Role**  
Product Designer

**My Contribution**  
Problem definition, solution design, UT design and analysis

**Country**  
🇹🇭 Thailand


---
---

# Part 1: Solving Pre-Launch Technical Constraints

---

**Problem Discovery**

## Technical Constraints Discovered from Local Team Specs

We planned to launch LINE Gift Shop in Thailand. However, we couldn't use the system that worked in Taiwan as-is. The specs from the local product team showed Thailand was completely different from Taiwan.

In Taiwan, all store POS systems were integrated in real-time, allowing instant verification of voucher usage. Thailand couldn't do that. Thai stores had mixed POS systems. Even stores with POS weren't integrated with Gift Shop in real-time. Stores without POS had staff record manually. When users redeemed vouchers in-store, the app still showed "available" status. Multi-store abuse was possible.

Contracts with **100+ brand partners** were already complete. We had **6 months** to launch. How to prevent duplicate usage without real-time verification was the core challenge.

---

**Problem Analysis**

## Defining 3 Abuse Scenarios

**Multi-Store Usage Possibility**

When a user redeems a voucher at Store A, it's recorded in the store POS. However, the Gift Shop system can't retrieve that data in real-time. In the app, it still shows "available" status. Travel time between stores in Bangkok is **20-30 minutes**. If a user quickly moves to Store B, they could use the same voucher again.

**Manual Recording Loopholes**

In stores without POS, staff manually record in notebooks or apps, then reconcile at closing time. Staff could miss records, and verification was impossible in real-time or even same-day. The potential for organized abuse was very high.

**Screenshot Sharing Possibility**

Activated voucher codes could be screenshotted and shared via LINE. Without animation, staff couldn't distinguish real vouchers from fake ones. This problem could occur in all stores regardless of POS availability.

**Other Alternatives Considered**

We considered GPS-based store arrival notifications or location-based auto-activation. However, integrating location data from Thai store partners was impossible. Real-time location tracking had privacy issues. Contracts with **100+ brand partners** were already complete, and we had **6 months** to launch. We needed a solution that worked with existing infrastructure.

We needed a solution that could block all three risks. The direction was clear. Create a system that automatically transitions to "used complete" **15 minutes** after the user indicates intent to use. And design experience-based security to prevent duplicate usage within those **15 minutes**.

---

**Solution Design**

## 3-Layer Experience-Based Security Design

We needed a solution that worked for both store types. The core idea was simple. When a user indicates intent to use, the system automatically transitions to "used complete" after **15 minutes**.

**15-Minute Time Limit: Preventing Multi-Store Usage**

When a user presses the redeem button, the system automatically processes completion after **15 minutes**. Why **15 minutes**?

Travel time between stores in Bangkok is typically **20-30 minutes**. **15 minutes** is shorter than travel time, preventing multi-store abuse. Simultaneously, it's sufficient time to use the voucher in-store. **10 minutes** was too tight during busy hours, and **20 minutes** had abuse risks. It was the optimal point between two constraints.

It was also effective for stores without POS. The system already processes completion before staff manually record. There's no room to miss or manipulate records.

**Dynamic Watermark: Preventing Screenshot Sharing**

We added an animated watermark to the voucher screen that changes every **3 seconds**. Since screenshots are static images, staff can distinguish real from fake at a glance. Barcode scanning functionality works without issues.

**Redemption Time Display: Supplementing Manual Recording Loopholes**

We displayed the exact redemption time prominently on screen. Staff can visually verify "redeemed within **15 minutes**". This was especially important for stores without POS. Time information was needed when recording manually.

The three layers combined into a complete security system. Multi-store abuse was **0 cases**. Screenshot sharing was successfully blocked. The auto-complete system worked smoothly. It worked in all stores regardless of POS availability.

---

**Launch**

## Thailand Market Launch (April 2025)

While solving Problem 1, we successfully completed Thailand market localization. The launch version included the **15-minute** auto-complete system, dynamic watermark, and redemption time display. The "unusable after **15 minutes**" popup also launched.

**Store Operations Preparation**

We established store operation guidelines and checklists for 100+ brand partners. We organized what staff should check when receiving LINE Gift barcodes. This included verifying redemption time, checking watermark movement, and barcode scanning procedures. We also included manual recording methods for stores without POS.

The launch result was successful. Abuse was 0 cases. It operated stably without POS. Post-launch local visits confirmed store staff were using checklists well.

---

**Impact**

## Achieving Stable Market Entry Without Infrastructure Investment

With the 15-minute auto-complete system and experience-based security design, we achieved **0 multi-store abuse cases**. Dynamic watermarks blocked screenshot sharing, and redemption time display supplemented manual recording loopholes. It worked stably in all stores regardless of POS system availability.

We established store operation guidelines for **100+ brand partners**. Post-launch local visits confirmed store staff were using checklists well. We succeeded in Thailand market entry without the infrastructure investment of real-time POS integration.

This framework is reusable for Vietnam and Indonesia launches. The approach of solving problems with experience-based security in markets with limited POS systems has been validated.

---
---

# Part 2: Discovering and Solving Post-Launch Timing Awareness Issues

---

**Problem Discovery**

## User Problems Discovered Through 91 CS Cases

The April 2025 launch was successful. **0 abuse cases**, successful screenshot blocking, auto-complete system worked stably. The security system was perfect.

However, **91 CS cases** occurred during July-September. Inquiries like "I pressed it before going to the store", "I didn't know about the time limit", "It expired on the way" kept coming. Users redeemed vouchers before visiting stores, and they expired during the **15-minute** journey.

We visited locally post-launch to check two things. First, whether store operations were going well. Staff were using checklists well, and abuse remained at **0 cases**. Second, how users actually used it. Direct user observation revealed two root problems.

**The Paradox of "Behavioral Success ≠ Cognitive Success"**

Remote testing (Maze) showed surprising results. Behavioral success rate was **100%**. All users completed the flow. But cognitive success rate was only **30%**. They completed quickly in an average of **22.3 seconds**, but **70%** missed time limit information.

"Didn't know" **50%**, "Don't remember" **20%**. Users habitually clicked without reading important information. Seemingly successful but actually at risk of experiencing unexpected code expiration at stores.

---

**Problem Analysis**

## Defining Two Root Problems

**Problem 1: Popup UX Writing Failure**

The popup had "unusable after **15 minutes**" information. However, "redeem **15 minutes** before arriving at store" wasn't clear. Users didn't understand "when to redeem".

**Problem 2: Lack of Context Before Popup**

Users couldn't know the gift type until the popup appeared. It was difficult to distinguish whether this was a store voucher or delivery gift. In an excited state after receiving the gift, users immediately pressed the redeem button. When the popup appeared, it was already too late.

Consequently, users redeemed before going to the store. **15 minutes** expired on the way. We tried changing just the button text on July 1st, but CS cases continued. Both were needed. We had to improve popup UX writing and provide "store voucher" hints on the pre-popup page.

---

**User Testing**

## Validating Two Directions with **105 Participants** UT

We conducted large-scale testing to find which of the two problems was more important.

Initially, we sketched multiple approaches. We explored popup position changes, tutorial enhancement, icon additions, bottom sheets, inline warnings. Through internal reviews and rapid prototype testing, we narrowed to two core directions. Design A focused on "popup UX writing improvement", Design B on "pre-redemption context provision".

**Design A: Popup UX Writing Improvement**

This method maintains the existing position but changes UX writing clearly. It directly guides with "redeem **15 minutes** before arriving at store". We made it noticeable as a center popup.

**Design B: Pre-Redemption Page Improvement**

This method adds a bottom sheet to the gift details screen. It provides two pieces of information. First is the gift type "store voucher". Second is the action guidance "redeem **15 minutes** before arriving at store". Users can learn naturally while scrolling.

We conducted remote testing (Maze) with **105 participants**. **39** experienced the current design. **34** experienced Design A. **32** experienced Design B. We measured time limit awareness, gift type clarity, information discovery timing, and misclick rate.

---

**Solution Implementation**

## Selecting and Launching Design B

We analyzed **105-participant** remote testing (Maze) results.

**Design A achieved **100%** time awareness rate.** This was the effect of clearly improving to "redeem **15 minutes** before arriving at store". However, problems remained. This design still shows information after redemption. The popup appearing suddenly without context felt like an error to users. Gift type was still unclear.

**Design B recorded **90%** time awareness rate.** **10%** lower, but there were more important advantages. Design B first informs "store voucher" on the gift details screen. Then guides "redeem **15 minutes** before arriving at store". Users learn naturally while scrolling. Gift type clarity achieved **100%**. Misclicks decreased from **11% to 7%**.

**The Effect of "Intentional Friction"**

Design B increased dwell time by **9.5 seconds** (**22.3s → 31.8s**). It became slower, but time awareness improved by **58%p** (**30% → 88%**). Users started consciously processing information.

Recognition timing also became systematic. **63%** recognized time limits on the gift details screen, **25%** at QR code, **13%** at popup. "Didn't know" responses were completely eliminated to **0%**. Understanding of 15-minute consequence improved from **10% to 100%**.

Design A only improved UX writing. It didn't solve lack of context. Design B provided both context and action guidance. The overall flow was more important than the **10%** awareness difference. We chose Design B.

We launched Design B in December 2025. Time awareness improved from **67% to 90%**. Gift type clarity went from **97% to 100%**. Misclicks decreased from **11% to 7%**. CS cases continuously decreased from **91 cases**.

---

**Impact**

## Improving User Behavior Through Pre-Redemption Information

Design B launch improved time limit awareness from **67% to 90%**. Gift type clarity achieved **100%**, and misclicks decreased from **11% to 7%**. The **91 CS cases** from July-September continuously decreased.

The key was changing information provision timing from post-redemption popup to pre-redemption bottom sheet. Users first recognized it was a store voucher on the gift details screen and naturally learned the action guidance to redeem **15 minutes** before arriving at store.

The **92%** redemption completion rate shows the **15-minute** auto-complete system is working stably. Monthly monitoring shows time awareness consistently maintains at **90%** level. Users who have good redemption experiences convert to gift purchasers next time. Redemption completer purchase conversion rate data is currently being collected.

---

**Impact - Overall**

## Stable Redemption Experience Achieved Through Two Launches

The April 2025 launch achieved **0 abuse cases**, stably entering the Thailand market. **100+ brand partners** operate the voucher system regardless of POS availability. We succeeded in market entry without infrastructure investment.

The December 2025 launch improved user behavior. Time awareness improved from **67% to 90%**, and CS cases **continuously decreased from 91 cases**. Redemption completion rate **92%** is stably maintained.

Good redemption experience creates gift sales. When gift recipients have good experiences at stores, they become gift senders next time. Redemption completer gift purchase conversion rate and increase versus non-completers is currently being measured. Data will be reflected in hero headline when secured.

The localization framework validated in Thailand will be reused for Vietnam and Indonesia launches. The approach of solving each market's infrastructure constraints with experience-based security is the core.

The next challenge is improving Giftbox to redemption conversion rate **27.61%**. Users view gifts but hesitate to redeem. Building trust pre-redemption is the next goal.

---

**Continuous Improvement**

## Ongoing Refinement

After launching Design B in December, time awareness stabilized at **90%**. CS cases also continuously decreased from **91 cases**.

Current funnel analysis shows **27%** Giftbox to redemption conversion rate is the bottleneck. Since **92%** of users who start redemption complete, the **15-minute** auto-complete system works well. The real problem is trust before redemption. For Q1 2026, we're planning interactive tutorials, pre-redemption preview, store location finder, and "save for later" scheduling features.

---

**Reflection**

## Learned from Failures

Not all attempts succeeded. The first failure was the "how to use" button. We added a help button, but users didn't click it. We learned help must be inline.

The second failure was mandatory tutorials. We made tutorials required, but users clicked without reading. Engagement was needed, not gatekeeping. The third failure was changing only button text. We changed "use voucher" to "do you want to use now?", but CS continued. Context was more important than buttons.

**The Fallacy of "Quick Completion = Good UX"**

The most important insight was "quick completion isn't success". The current version completed quickly in an average of **22.3 seconds**. We thought it was intuitive design. But actually **70%** missed important information and clicked habitually. Behind the **100%** behavioral success rate was a dangerous gap of **30%** cognitive success rate.

The improvement became **9.5 seconds** slower (**22.3s → 31.8s**). However, time awareness improved by **58%p** (**30% → 88%**). Appropriate friction actually improved user experience. We chose **90%** awareness (Design B) over **100%** awareness (Design A). Misclick reduction (**11%→7%**) validated this decision. One market's success metrics don't automatically translate to another market.

## What We'd Do Differently

One pre-launch store observation wasn't enough. Thai users were more cautious than Taiwan users, and we should have measured and designed for these cultural differences.


## What Worked Well

Close collaboration with local product team and post-launch local visits were decisive. Pre-launch, we received store environment specs from the local team and identified abuse possibilities. Post-launch, we visited locally to verify store operations and discover user problems.

Testing with **105 Thai users** revealed behaviors Taiwan testing would never show. Cultural differences in trust, caution, and decision-making. Localization isn't translation. It's redesign fitted to local reality. This framework now guides Vietnam and Indonesia launches.

---

**Next Steps**

## 2026 Plan: Building Pre-Redemption Trust

The **27.61%** Giftbox to redemption conversion rate reveals the next localization challenge. Thai users need different trust-building mechanisms than Taiwan users before committing to the **15-minute** redemption.

For Q1 2026, we're planning interactive tutorials tailored to Thai user learning patterns. Experience optimized for Thai context, not translated Taiwan content. Pre-redemption preview feature lets users see what happens without committing. This addresses Thai users' higher caution.

We'll also add store location finder integration. Thai users want to verify store locations before redemption. This was unnecessary for Taiwan users. "Save for later" scheduling feature lets Thai users plan ahead rather than impulse redeem.

Thailand's localization approach now guides LINE Gift Shop launches in Vietnam and Indonesia. Markets with similar infrastructure challenges. Each market will get its own locally optimized experience, not a translated Thai experience.

Localization isn't one-time adaptation. It's continuously understanding how local users think, behave, and make decisions differently from the original market.

---

**Team**

**Product Designer:** Heejin Yoon
**Product Manager (🇹🇭):** Ta
**Product Manager (🇰🇷):** Yeonji Kim, Boreum Kim
**Product Designer:** Haeji
