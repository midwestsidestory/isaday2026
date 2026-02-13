# Deploy isabellelee.studio with Namecheap + Netlify

Follow these steps in order. Total time: about 10 minutes (+ DNS wait).

---

## Part 1: Deploy the site on Netlify

1. **Go to** [https://app.netlify.com](https://app.netlify.com) and sign up or log in (free).

2. **Deploy your site:**
   - Click **“Add new site”** → **“Deploy manually”**.
   - **Drag and drop** your entire project folder (the folder that contains `index.html`, `home.html`, `photos/`, `songs/`, etc.) into the drop zone.
   - Wait for the deploy to finish. You’ll get a URL like `something-random-123.netlify.app`. **Copy that URL** (you’ll use it in Part 2).

3. **Add your custom domain:**
   - In Netlify, open your site → **Domain settings** (or **Site configuration** → **Domain management**).
   - Click **“Add custom domain”** or **“Add domain”**.
   - Type: **isabellelee.studio**
   - Click **“Verify”** or **“Add”**. Netlify will show you DNS instructions. You can leave that tab open.

---

## Part 2: Point Namecheap to Netlify

1. **Log in** at [https://www.namecheap.com](https://www.namecheap.com) → **Domain List** → click **Manage** next to **isabellelee.studio**.

2. Open the **“Advanced DNS”** tab.

3. **Remove** any existing **A Record** or **CNAME** for `@` or `www` if they’re not needed (or you can replace them in the next step).

4. **Add these records:**

   | Type  | Host | Value                    | TTL   |
   |-------|------|--------------------------|--------|
   | A     | @    | 75.2.60.5                | Automatic |
   | CNAME | www  | **YOUR-SITE-NAME.netlify.app** | Automatic |

   - Replace **YOUR-SITE-NAME.netlify.app** with the exact Netlify URL from Part 1 (e.g. `something-random-123.netlify.app`). Do **not** add `https://` or a path.

5. **Save** the DNS changes.

6. **Back in Netlify:**  
   - In Domain settings, next to isabellelee.studio, click **“Verify”** or wait for “DNS verification successful.”  
   - Enable **HTTPS** if Netlify offers it (usually automatic).

---

## Part 3: Wait and test

- DNS can take **5 minutes to 48 hours** (often 15–30 minutes).
- Then open **https://isabellelee.studio** in your browser. Your site should load.
- If you added `www`, **https://www.isabellelee.studio** should also work.

---

## Troubleshooting

- **“Site not found” or wrong site:** Double-check the CNAME value: it must be exactly your Netlify URL (e.g. `something-random-123.netlify.app`).
- **SSL certificate pending:** In Netlify, Domain settings → HTTPS → “Verify DNS configuration.” Wait a bit and try again.
- **Still not working after 1 hour:** In Namecheap, confirm the A record for `@` is `75.2.60.5` and the CNAME for `www` is your Netlify URL. In Netlify, Domain settings should show the domain as verified.

---

**Summary:** You deploy the folder on Netlify, add isabellelee.studio in Netlify, then in Namecheap Advanced DNS you set A record `@` → `75.2.60.5` and CNAME `www` → `yoursite.netlify.app`.
