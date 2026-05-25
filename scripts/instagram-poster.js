#!/usr/bin/env node

/**
 * SURGISAATHI Instagram Auto-Poster
 * Uses Meta's Instagram Graph API (official, free, no third-party needed)
 * 
 * SETUP (one-time):
 * 1. Go to https://developers.facebook.com → Create App → Business type
 * 2. Add "Instagram Graph API" product
 * 3. Connect your Instagram Business account to a Facebook Page
 * 4. Generate a long-lived access token (see instructions below)
 * 5. Create .env.instagram with your credentials
 * 
 * USAGE:
 *   node scripts/instagram-poster.js --post 1       # Post carousel #1
 *   node scripts/instagram-poster.js --post 3       # Post single image #3
 *   node scripts/instagram-poster.js --post all      # Post all (with delays)
 *   node scripts/instagram-poster.js --status        # Check account info
 *   node scripts/instagram-poster.js --schedule      # Show posting schedule
 */

import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ─── CONFIG ─────────────────────────────────────────────
const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
const INSTAGRAM_BUSINESS_ACCOUNT_ID = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;
const SITE_BASE_URL = process.env.SITE_BASE_URL || 'https://surgisaathi.com';
const GRAPH_API_VERSION = 'v21.0';
const GRAPH_API_BASE = `https://graph.facebook.com/${GRAPH_API_VERSION}`;

// ─── POST DATA ──────────────────────────────────────────

const POSTS = [
  {
    id: 1,
    type: 'carousel',
    title: '5 Signs Your Piles Need Surgery',
    images: [
      'post1_piles_surgery_signs_1779684629815.png',
      'post1_slide2_sign1_1779684916038.png',
      'post1_slide3_sign2_1779684940318.png',
      'post1_slide4_sign3_1779684963415.png',
      'post1_slide5_sign4_1779684988063.png',
      'post1_slide6_cta_1779685013864.png',
    ],
    caption: `If you've been suffering for months, you're not alone — and you don't have to keep suffering.

Grade 3–4 piles don't respond to creams. Laser surgery takes 30 minutes. You go home the same day.

📲 Free private consultation: Link in bio
💬 WhatsApp: +91 70114 73737

#PilesSurgery #LaserSurgery #Hemorrhoids #PilesTreatment #Proctologist #HealthcareIndia #SameDay #SURGISAATHI #MumbaiDoctor #ChandigarhDoctor`,
    scheduledDay: 'Mon',
    scheduledWeek: 1,
  },
  {
    id: 2,
    type: 'single',
    title: 'Piles Myths vs Facts',
    images: ['post2_myths_vs_facts_1779684653032.png'],
    caption: `Let's bust the myths that keep people suffering in silence.

Piles are NOT caused by spicy food.
Surgery is NOT weeks of pain.
And talking about it is NOT embarrassing — it's brave.

Get the facts. Get treated. Get on with your life.

📲 Free consultation: Link in bio

#PilesMyths #HealthFacts #LaserPilesSurgery #MedicalMyths #Proctology #DigestiveHealth #SURGISAATHI #PilesAwareness`,
    scheduledDay: 'Wed',
    scheduledWeek: 1,
  },
  {
    id: 3,
    type: 'single',
    title: '3,500+ Patients Stats',
    images: ['post3_trust_stats_1779684677287.png'],
    caption: `Numbers don't lie.

3,500+ patients trusted SURGISAATHI for their laser surgery. 4.8★ average rating across Mumbai and Chandigarh.

Every number here represents someone who was scared, reached out, and is now pain-free.

Your turn? 📲 Free consultation → link in bio

#PatientResults #SurgeryResults #SURGISAATHI #LaserSurgery #Mumbai #Chandigarh #TrustedCare #NABHHospital`,
    scheduledDay: 'Fri',
    scheduledWeek: 1,
  },
  {
    id: 4,
    type: 'single',
    title: 'Piles Surgery Cost 2026',
    images: ['post4_cost_breakdown_1779684702516.png'],
    caption: `The #1 reason people delay piles treatment: cost uncertainty.

So here's the truth — no marketing fluff, just real numbers.

Laser piles surgery starts at ₹38,000 all-inclusive.
Insurance covers 80–100% for most patients.
We even offer 0% EMI.

Stop guessing. Get your exact quote for free.

📲 WhatsApp: +91 70114 73737

#PilesSurgeryCost #LaserPilesCost #MumbaiPiles #TransparentPricing #CashlessInsurance #SURGISAATHI #HealthInsuranceIndia`,
    scheduledDay: 'Mon',
    scheduledWeek: 2,
  },
  {
    id: 5,
    type: 'carousel',
    title: 'Piles vs Fissure vs Fistula',
    images: [
      'post5_piles_vs_fissure_vs_fistula_1779684728850.png',
      'post5_slide2_piles_1779685040542.png',
      'post5_slide3_fissure_1779685064812.png',
    ],
    caption: `Rectal pain ≠ always piles.

Confusing piles, fissure, and fistula leads to wrong treatment and months of unnecessary suffering.

Swipe to learn the differences → and if you're still unsure, our doctors can help you figure it out in a free, private consultation.

📲 Link in bio | 💬 WhatsApp: +91 70114 73737

#Piles #Fissure #Fistula #KnowTheDifference #ProctologyFacts #SURGISAATHI #HealthEducation #RectalHealth`,
    scheduledDay: 'Wed',
    scheduledWeek: 2,
  },
  {
    id: 6,
    type: 'single',
    title: 'You Googled This at 2 AM',
    images: ['post6_stigma_breaking_1779684753686.png'],
    caption: `We know you didn't want to be here. We know you've been searching alone, late at night, hoping for answers.

That's exactly why SURGISAATHI exists.

Private consultation. WhatsApp only (if you prefer). Verified surgeons who treat thousands of patients just like you every month.

You are not alone. And this is fixable.

📲 WhatsApp us: +91 70114 73737

#NoJudgment #PrivateConsultation #PilesAwareness #BreakTheStigma #MentalHealth #SURGISAATHI #HealthcareForAll #YouAreNotAlone`,
    scheduledDay: 'Fri',
    scheduledWeek: 2,
  },
  {
    id: 7,
    type: 'single',
    title: 'Your SURGISAATHI Journey',
    images: ['post7_patient_journey_1779684780411.png'],
    caption: `Scared of the process? Here's how simple it actually is.

One WhatsApp message. One free consultation. One 30-minute procedure. Done.

We handle the hospital. We handle the insurance. We handle the follow-up. You just show up.

📲 Start your journey: Link in bio

#HowItWorks #PatientJourney #SURGISAATHI #LaserSurgery #CashlessInsurance #MumbaiSurgery #ChandigarhSurgery #Healthcare`,
    scheduledDay: 'Mon',
    scheduledWeek: 3,
  },
  {
    id: 8,
    type: 'single',
    title: 'The Anti-Piles Diet',
    images: ['post8_anti_piles_diet_1779684803926.png'],
    caption: `Your diet is 50% of your piles treatment.

These 5 foods — eaten consistently — can prevent piles from worsening and help Grade 1–2 piles heal without surgery.

But diet only works for early-stage piles. If you're Grade 3–4, laser surgery is the permanent solution.

Save this post. Share it with someone who needs it. 💚

📲 Free consultation: Link in bio

#PilesDiet #HighFibreDiet #DigestiveHealth #HealthyEating #IndianDiet #SURGISAATHI #PilesRemedy #NaturalHealing`,
    scheduledDay: 'Wed',
    scheduledWeek: 3,
  },
  {
    id: 9,
    type: 'single',
    title: 'Insurance Covers Piles Surgery',
    images: ['post9_insurance_guide_1779684829757.png'],
    caption: `"Will my insurance cover it?" — the question every patient asks.

Answer: YES, in most cases. Grade 3–4 piles surgery is covered 80–100% by all major health insurers.

But getting rejected because of paperwork mistakes? That happens too. That's why we handle the ENTIRE insurance process for you — for free.

📲 Check your coverage now: WhatsApp +91 70114 73737

#HealthInsurance #CashlessInsurance #PilesSurgery #InsuranceClaim #SURGISAATHI #StarHealth #HDFCErgo #MedicalInsurance`,
    scheduledDay: 'Fri',
    scheduledWeek: 3,
  },
  {
    id: 10,
    type: 'single',
    title: 'Traditional vs Laser Surgery',
    images: ['post10_laser_vs_traditional_1779684854642.png'],
    caption: `Same disease. Same cure rate. Completely different experience.

If your surgeon is still recommending open surgery for piles, fissure, or fistula — ask about laser alternatives.

At SURGISAATHI, 100% of our surgeries are laser/minimally invasive. There's no reason to suffer more than you need to.

📲 Free consultation: Link in bio

#LaserVsTraditional #LaserSurgery #MinimallyInvasive #PilesSurgery #FissureSurgery #ModernMedicine #SURGISAATHI #PatientFirst`,
    scheduledDay: 'Mon',
    scheduledWeek: 4,
  },
];

// ─── API HELPERS ────────────────────────────────────────

async function graphApiCall(endpoint, params = {}, method = 'GET') {
  const url = new URL(`${GRAPH_API_BASE}${endpoint}`);
  
  if (method === 'GET') {
    Object.entries({ access_token: INSTAGRAM_ACCESS_TOKEN, ...params })
      .forEach(([k, v]) => url.searchParams.set(k, v));
    const res = await fetch(url.toString());
    return res.json();
  }
  
  const body = new URLSearchParams({ access_token: INSTAGRAM_ACCESS_TOKEN, ...params });
  const res = await fetch(url.toString(), { method: 'POST', body });
  return res.json();
}

function getImageUrl(filename) {
  return `${SITE_BASE_URL}/images/instagram/${filename}`;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ─── CORE FUNCTIONS ─────────────────────────────────────

async function getAccountInfo() {
  const data = await graphApiCall(`/${INSTAGRAM_BUSINESS_ACCOUNT_ID}`, {
    fields: 'id,username,name,followers_count,media_count',
  });
  return data;
}

async function checkPublishingLimit() {
  const data = await graphApiCall(`/${INSTAGRAM_BUSINESS_ACCOUNT_ID}/content_publishing_limit`, {
    fields: 'config,quota_usage',
  });
  return data;
}

async function createMediaContainer(imageUrl, caption = '', isCarouselChild = false) {
  const params = { image_url: imageUrl };
  if (isCarouselChild) {
    params.is_carousel_item = 'true';
  } else {
    params.caption = caption;
  }
  
  const data = await graphApiCall(`/${INSTAGRAM_BUSINESS_ACCOUNT_ID}/media`, params, 'POST');
  if (data.error) {
    throw new Error(`Create container failed: ${JSON.stringify(data.error)}`);
  }
  console.log(`  ✓ Container created: ${data.id}`);
  return data.id;
}

async function createCarouselContainer(childIds, caption) {
  const params = {
    media_type: 'CAROUSEL',
    children: childIds.join(','),
    caption,
  };
  
  const data = await graphApiCall(`/${INSTAGRAM_BUSINESS_ACCOUNT_ID}/media`, params, 'POST');
  if (data.error) {
    throw new Error(`Carousel container failed: ${JSON.stringify(data.error)}`);
  }
  console.log(`  ✓ Carousel container created: ${data.id}`);
  return data.id;
}

async function checkContainerStatus(containerId) {
  const data = await graphApiCall(`/${containerId}`, {
    fields: 'status_code,status',
  });
  return data.status_code;
}

async function waitForContainer(containerId, maxWaitMs = 60000) {
  const start = Date.now();
  while (Date.now() - start < maxWaitMs) {
    const status = await checkContainerStatus(containerId);
    if (status === 'FINISHED') return true;
    if (status === 'ERROR') throw new Error(`Container ${containerId} has error status`);
    console.log(`  ⏳ Container ${containerId}: ${status} — waiting...`);
    await sleep(3000);
  }
  throw new Error(`Container ${containerId} timed out after ${maxWaitMs}ms`);
}

async function publishMedia(containerId) {
  const data = await graphApiCall(`/${INSTAGRAM_BUSINESS_ACCOUNT_ID}/media_publish`, {
    creation_id: containerId,
  }, 'POST');
  
  if (data.error) {
    throw new Error(`Publish failed: ${JSON.stringify(data.error)}`);
  }
  console.log(`  ✅ Published! Media ID: ${data.id}`);
  return data.id;
}

// ─── POST FUNCTIONS ─────────────────────────────────────

async function postSingleImage(post) {
  console.log(`\n📸 Posting: "${post.title}" (single image)`);
  
  const imageUrl = getImageUrl(post.images[0]);
  console.log(`  Image URL: ${imageUrl}`);
  
  const containerId = await createMediaContainer(imageUrl, post.caption);
  await waitForContainer(containerId);
  return publishMedia(containerId);
}

async function postCarousel(post) {
  console.log(`\n📸 Posting: "${post.title}" (carousel, ${post.images.length} slides)`);
  
  // Step 1: Create child containers
  const childIds = [];
  for (const img of post.images) {
    const url = getImageUrl(img);
    console.log(`  Image: ${img}`);
    const childId = await createMediaContainer(url, '', true);
    childIds.push(childId);
    await sleep(1000); // Rate limit safety
  }
  
  // Step 2: Wait for all children
  console.log('  Waiting for all slides to process...');
  for (const childId of childIds) {
    await waitForContainer(childId);
  }
  
  // Step 3: Create carousel container
  const carouselId = await createCarouselContainer(childIds, post.caption);
  await waitForContainer(carouselId);
  
  // Step 4: Publish
  return publishMedia(carouselId);
}

async function publishPost(postId) {
  const post = POSTS.find(p => p.id === postId);
  if (!post) {
    console.error(`❌ Post #${postId} not found`);
    return;
  }
  
  if (post.type === 'carousel') {
    return postCarousel(post);
  }
  return postSingleImage(post);
}

// ─── CLI ────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  
  if (!INSTAGRAM_ACCESS_TOKEN || !INSTAGRAM_BUSINESS_ACCOUNT_ID) {
    console.error(`
❌ Missing credentials!

Create a file: .env.instagram (then source it or use dotenv)

  INSTAGRAM_ACCESS_TOKEN=your_long_lived_token
  INSTAGRAM_BUSINESS_ACCOUNT_ID=your_ig_business_id
  SITE_BASE_URL=https://surgisaathi.com

HOW TO GET THESE:
────────────────────────────────────────
1. Go to https://developers.facebook.com
2. Create a new App (type: Business)
3. Add "Instagram Graph API" product
4. Go to Graph API Explorer (https://developers.facebook.com/tools/explorer/)
5. Select your App, then generate a User Token with permissions:
   - instagram_basic
   - instagram_content_publish
   - pages_show_list
   - pages_read_engagement
6. Exchange for a long-lived token (valid 60 days):
   
   curl "https://graph.facebook.com/${GRAPH_API_VERSION}/oauth/access_token?grant_type=fb_exchange_token&client_id=YOUR_APP_ID&client_secret=YOUR_APP_SECRET&fb_exchange_token=YOUR_SHORT_TOKEN"

7. Get your Instagram Business Account ID:
   
   curl "https://graph.facebook.com/${GRAPH_API_VERSION}/me/accounts?access_token=YOUR_LONG_TOKEN"
   → Take the Page ID, then:
   curl "https://graph.facebook.com/${GRAPH_API_VERSION}/PAGE_ID?fields=instagram_business_account&access_token=YOUR_LONG_TOKEN"
   → The instagram_business_account.id is your INSTAGRAM_BUSINESS_ACCOUNT_ID

8. Save both values in .env.instagram and you're done!
────────────────────────────────────────
`);
    process.exit(1);
  }
  
  if (args.includes('--status')) {
    console.log('\n📊 Account Info:');
    const info = await getAccountInfo();
    console.log(JSON.stringify(info, null, 2));
    
    console.log('\n📊 Publishing Limits:');
    const limits = await checkPublishingLimit();
    console.log(JSON.stringify(limits, null, 2));
    return;
  }
  
  if (args.includes('--schedule')) {
    console.log('\n📅 SURGISAATHI Instagram Posting Schedule\n');
    console.log('Week | Day | Post');
    console.log('─────┼─────┼────────────────────────────────────');
    for (const p of POSTS) {
      console.log(`  ${p.scheduledWeek}  | ${p.scheduledDay} | #${p.id}: ${p.title} (${p.type}, ${p.images.length} ${p.images.length === 1 ? 'image' : 'images'})`);
    }
    console.log('\nTo post: node scripts/instagram-poster.js --post <number>');
    return;
  }
  
  if (args.includes('--post')) {
    const postArg = args[args.indexOf('--post') + 1];
    
    if (postArg === 'all') {
      console.log('🚀 Publishing ALL 10 posts with 30-second delays...\n');
      for (const post of POSTS) {
        try {
          await publishPost(post.id);
          console.log(`  ⏳ Waiting 30s before next post (rate limit)...\n`);
          await sleep(30000);
        } catch (err) {
          console.error(`  ❌ Failed to post #${post.id}: ${err.message}`);
        }
      }
      console.log('\n✅ Done! All posts published.');
    } else {
      const postId = parseInt(postArg, 10);
      if (isNaN(postId) || postId < 1 || postId > 10) {
        console.error('❌ Invalid post number. Use 1-10 or "all".');
        process.exit(1);
      }
      await publishPost(postId);
    }
    return;
  }
  
  // Default: show help
  console.log(`
📸 SURGISAATHI Instagram Poster
────────────────────────────────
Commands:
  --status              Check account info & publishing limits
  --schedule            Show posting schedule
  --post <1-10>         Publish a specific post
  --post all            Publish all 10 posts (with delays)

Examples:
  node scripts/instagram-poster.js --status
  node scripts/instagram-poster.js --post 1
  node scripts/instagram-poster.js --post all
`);
}

main().catch(err => {
  console.error('❌ Fatal error:', err.message);
  process.exit(1);
});
