import logo1 from './logo.svg'
import logo_icon from './logo_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'
import logo from "./logo.ico";

export const assets = {
  logo1,
    logo,
    logo_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    star_icon,
    rating_star,
    sample_img_1,
    sample_img_2,
    email_icon,
    lock_icon,
    cross_icon,
    star_group,
    credit_star,
    profile_icon
}

export const reviewData = [
  {
    image: profile_img_1,
    name: "Aarav Sharma",
    role: "Digital Marketer",
    stars: 5,
    text: `This tool has completely streamlined my workflow. The results are outstanding, and the process is incredibly intuitive.`,
  },
  {
    image: profile_img_2,
    name: "Ishita Verma",
    role: "Photographer",
    stars: 4,
    text: `The AI-generated images are amazing. It saves me so much time, though I wish there were more customization options.`,
  },
  {
    image: profile_img_1,
    name: "Sophia Martinez",
    role: "Social Media Strategist",
    stars: 5,
    text: `Absolutely love this tool! It helps me create professional visuals for my clients in minutes.`,
  },
  {
    image: profile_img_2,
    name: "Kabir Singh",
    role: "Freelance Artist",
    stars: 3,
    text: `The concept is great, but sometimes the results need a bit of tweaking. Overall, it’s a time-saver.`,
  },
  {
    image: profile_img_1,
    name: "Rohan Das",
    role: "Content Writer",
    stars: 4,
    text: `I use this AI generator for quick blog visuals. The quality is superb, and it integrates seamlessly into my workflow.`,
  },
];


export const plans = [
    {
      id: 'Basic',
      price: 10,
      credits: 100,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 50,
      credits: 500,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 250,
      credits: 5000,
      desc: 'Best for enterprise use.'
    },
  ]