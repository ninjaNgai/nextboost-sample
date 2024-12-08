# Next.js Landing Page Template with Email & Database Integration

A clean, modern landing page template built with Next.js 15, Tailwind CSS, and shadcn/ui. Includes email integration with Resend and database functionality with Supabase.

## Features

- 🎨 Modern UI with Tailwind CSS and shadcn/ui
- 📧 Email integration using Resend
- 📦 Database integration with Supabase
- 🔄 Form handling with validation
- 📱 Fully responsive design
- ✨ Clean and maintainable code structure

## Getting Started

1. Clone this repository:

```bash
git clone https://github.com/ninjaNgai/nextboost-sample.git your-app
cd your-app
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables in `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
RESEND_API_KEY=your_resend_api_key
```

4. Create the required table in Supabase:

```sql
create table public.subscribers (
  id uuid default uuid_generate_v4() primary key,
  email text not null unique,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.subscribers enable row level security;

-- Create a policy that allows inserting new subscribers
create policy "Allow public to subscribe"
  on public.subscribers
  for insert
  with check (true);
```

5. Run the development server:

```bash
npm run dev
```

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── welcome-email/
│   │   │       └── route.ts      # API route for sending welcome emails
│   │   ├── page.tsx              # Main landing page
│   │   └── layout.tsx            # Root layout
│   ├── components/
│   │   └── ui/                   # shadcn/ui components
│   └── lib/
│       └── supabase/             # Supabase client configuration
├── public/                       # Static assets
└── .env.local                    # Environment variables
```

## Customization

1. Update the branding:

   - Replace "Your Brand" in the navbar
   - Update the headline and description
   - Modify the color scheme in `tailwind.config.js`

2. Modify email templates:

   - Edit `/api/welcome-email/route.ts` to customize the welcome email

3. Add new features:
   - Install additional shadcn/ui components as needed
   - Extend the database schema for your needs
   - Add new API routes for additional functionality

## Deployment

1. Push your code to GitHub

2. Deploy on Vercel:
   - Connect your GitHub repository
   - Add environment variables
   - Deploy!

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Supabase Documentation](https://supabase.com/docs)
- [Resend Documentation](https://resend.com/docs)

## Support

Need help? Open an issue or reach out to [Courtney Ngai](https://www.linkedin.com/in/iamcourtneyngai/).

## License

MIT License - feel free to use this template for any purpose!
