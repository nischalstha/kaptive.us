import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home"
  },
  {
    id: "about",
    title: "About Us"
  },
  {
    id: "product",
    title: "Book Consultation (Free)"
  },
  {
    id: "clients",
    title: "Contact"
  }
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Consultation & Analysis",
    content:
      "Schedule a consultation with our team to discuss your organization’s staffing needs and objectives."
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Talent Acquisition",
    content:
      "Utilizing our extensive network and industry expertise, we will identify top-tier candidates for your specific roles."
  },
  {
    id: "feature-3",
    icon: send,
    title: "Successful Placement",
    content:
      "We facilitate the interview and selection process, negotiations and finalizing the job offer."
  }
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "We appreciated your cost-effective approach. Saving money while getting results - that's a win-win",
    name: "Robert Turner",
    title: "IT Manager",
    img: people01
  },
  {
    id: "feedback-2",
    content:
      "Your unwavering commitment to our project was impressive. You truly think beyond the box, and it shows.",
    name: "Glen Dyer",
    title: "Director of Tech Advancement",
    img: people02
  },
  {
    id: "feedback-3",
    content:
      "We appreciated your service's focus on our budget. You provided efficient solutions that made a positive impact on our finances.",
    name: "Amit Sharma",
    title: "CTO",
    img: people03
  }
];

export const stats = [
  {
    id: "stats-1",
    title: "Successful Placement",
    value: "50+"
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "10+"
  },
  {
    id: "stats-3",
    title: "Client Satisfaction Rate",
    value: "100%"
  }
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "About Us",
        link: "https://www.kaptiv.us/content/"
      },
      {
        name: "Book Consultation (Free)",
        link: "https://www.kaptiv.us/how-it-works/"
      },
      {
        name: "Contact Us",
        link: "https://www.kaptiv.us/create/"
      }
    ]
  },
  {
    title: "Partner",
    links: [
      {
        name: "Become a Partner (Coming soon)",
        link: "https://www.kaptiv.us/become-a-partner/"
      }
    ]
  }
];

export const socialMedia = [
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/company/kaptiv-llc/"
  }
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb
  },
  {
    id: "client-2",
    logo: binance
  },
  {
    id: "client-3",
    logo: coinbase
  },
  {
    id: "client-4",
    logo: dropbox
  }
];
