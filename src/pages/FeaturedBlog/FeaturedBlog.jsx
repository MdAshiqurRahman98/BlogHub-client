import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from "@table-library/react-table-library/theme";
import { Helmet } from 'react-helmet-async';

const nodes = [
  {
    blog_id: 1,
    title: "The Latest in Smartphone Technology",
    image: "https://i.ibb.co/KsJ8mfN/phone.jpg",
    category: "Technology",
    shortDescription: "Explore the cutting-edge advancements in smartphone technology and stay updated with the latest trends.",
    longDescription: "In this blog, we delve into the exciting world of smartphone technology. From foldable displays to advanced camera systems, we cover it all. Stay up to date with the latest trends in the tech world and gain insights into the innovations that are shaping the future of mobile devices.",
    timestamp: "2023-11-06T08:44:45.852+00:00"
  },
  {
    blog_id: 2,
    title: "Delicious Food from Around the World",
    image: "https://i.ibb.co/pJ6HyQx/Food1.jpg",
    category: "Food",
    shortDescription: "Embark on a culinary journey with delectable dishes from various cuisines and savor the flavors of the world.",
    longDescription: "Join us on a global gastronomic adventure as we explore the most delicious food from around the world. From street food to fine dining, we uncover the flavors that make each culture unique. Discover the stories behind iconic dishes, learn cooking tips, and immerse yourself in the world of international cuisine.",
    timestamp: "2023-11-06T08:48:58.979+00:00"
  },
  {
    blog_id: 3,
    title: "Adventures in the Amazing Outdoors",
    image: "https://i.ibb.co/b2gHpQd/Travel1.jpg",
    category: "Travel",
    shortDescription: "Discover thrilling travel experiences in nature's playground and explore the world's most scenic destinations.",
    longDescription: "Get ready for thrilling adventures in the great outdoors. From mountain hikes to tropical escapes, we share travel stories and tips for those who seek the wonders of the natural world. Experience the beauty of remote landscapes, encounter wildlife, and uncover the magic of outdoor exploration.",
    timestamp: "2023-11-06T08:50:36.619+00:00"
  },
  {
    blog_id: 4,
    title: "The Evolution of Mobile Apps",
    image: "https://i.ibb.co/wdwWHp9/Technology2.jpg",
    category: "Technology",
    shortDescription: "Uncover the history and evolution of mobile applications and gain insights into their impact on society.",
    longDescription: "Mobile apps have come a long way since their inception. We take a journey through time to explore how mobile apps have evolved, shaped industries, and changed the way we live. Discover the stories of successful apps, their creators, and their influence on various aspects of our lives.",
    timestamp: "2023-11-06T08:52:08.858+00:00"
  },
  {
    blog_id: 5,
    title: "Tantalizing Street Food Adventures",
    image: "https://i.ibb.co/1J0Fdk5/Food2.webp",
    category: "Food",
    shortDescription: "Savor the world's most mouthwatering street food delicacies and experience the thrill of culinary exploration.",
    longDescription: "Street food is where cultures truly shine through their culinary creations. Join us as we embark on a street food adventure to discover and savor the most tantalizing dishes. From bustling food markets to hidden street corners, you'll witness the diversity of street food culture and taste dishes that have stood the test of time.",
    timestamp: "2023-11-06T08:53:25.586+00:00"
  },
  {
    blog_id: 6,
    title: "Exploring Exotic Destinations",
    image: "https://i.ibb.co/VTZqYBH/Travel2.jpg",
    category: "Travel",
    shortDescription: "Journey to exotic destinations and immerse yourself in their unique charm and vibrant cultures.",
    longDescription: "Escape to the world's most exotic destinations and experience the beauty and culture they have to offer. From hidden paradises to bustling metropolises, there's an adventure waiting for you. Immerse yourself in the traditions, history, and people of these enchanting places, and let your wanderlust guide you on unforgettable journeys.",
    timestamp: "2023-11-06T08:54:58.345+00:00"
  }
]

const COLUMNS = [
  { label: 'Serial Number', renderCell: (item) => item.blog_id },
  { label: 'Blog Title', renderCell: (item) => item.title },
  {
    label: 'Blog Category',
    renderCell: (item) => item.category
  },
  { label: 'Short Description', renderCell: (item) => item.shortDescription },
  { label: 'Posted Time', renderCell: (item) => item.timestamp },
];

const THEME = {
  Table: ``,
  Header: ``,
  Body: ``,
  BaseRow: `
      background-color: var(--theme-ui-colors-background);
  
      &.row-select-selected, &.row-select-single-selected {
        background-color: var(--theme-ui-colors-background-secondary);
        color: var(--theme-ui-colors-text);
      }
    `,
  HeaderRow: `
      font-size: 17px;
      color: var(--theme-ui-colors-text-light);
  
      .th {
        border-bottom: 1px solid var(--theme-ui-colors-border);
      }
    `,
  Row: `
      font-size: 17px;
      color: var(--theme-ui-colors-text);
  
      &:not(:last-of-type) .td {
        border-bottom: 1px solid var(--theme-ui-colors-border);
      }
  
      &:hover {
        color: var(--theme-ui-colors-text-light);
      }
    `,
  BaseCell: `
      border-bottom: 1px solid transparent;
      border-right: 1px solid transparent;
  
      padding: 8px;
      height: 52px;
  
      svg {
        fill: var(--theme-ui-colors-text);
      }
    `,
  HeaderCell: ``,
  Cell: ``,
};

const FeaturedBlogsTable = () => {
  const data = { nodes };
  const theme = useTheme(THEME);

  return (
    <>
      <Helmet>
        <title>Featured Blogs | BlogHub</title>
      </Helmet>
      <div className='mb-11'>
        <h3 className="text-3xl font-bold text-center mt-14 mb-9">Featured Blogs</h3>
        <CompactTable columns={COLUMNS} data={data} theme={theme} />
      </div>
    </>
  );
};

export default FeaturedBlogsTable;