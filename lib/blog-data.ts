export interface BlogArticle {
  slug: string;
  category: string;
  readTime: string;
  title: string;
  description: string;
  author: string;
  date: string;
  content?: string;
  featured?: boolean;
}

// Sample blog articles data
// In production, this would come from a CMS, database, or markdown files
export const blogArticles: BlogArticle[] = [
  {
    slug: "importance-of-play-based-learning",
    category: "Education",
    readTime: "5 min read",
    title: "The Importance of Play-Based Learning in Early Childhood",
    description:
      "Discover how play-based learning approaches foster creativity, social skills, and cognitive development in young children.",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    featured: true,
    content: `
      <p>Play-based learning is a cornerstone of early childhood education, and for good reason. Research consistently shows that children learn best when they're actively engaged in hands-on, meaningful experiences.</p>
      
      <h2>What is Play-Based Learning?</h2>
      <p>Play-based learning is an educational approach that uses play as the primary method for children to explore, discover, and learn about the world around them. It's not just "free play" – it's intentional, guided, and deeply educational.</p>
      
      <h2>The Benefits</h2>
      <ul>
        <li><strong>Cognitive Development:</strong> Problem-solving, critical thinking, and creativity flourish during play</li>
        <li><strong>Social Skills:</strong> Children learn to cooperate, negotiate, and communicate with peers</li>
        <li><strong>Emotional Growth:</strong> Play helps children understand and express their emotions</li>
        <li><strong>Physical Development:</strong> Active play builds motor skills and coordination</li>
      </ul>
      
      <h2>Implementing Play-Based Learning at Home</h2>
      <p>Parents can support play-based learning by providing open-ended materials, following their child's interests, and asking open-ended questions that encourage thinking and exploration.</p>
    `,
  },
  {
    slug: "preparing-toddler-first-school",
    category: "Parenting",
    readTime: "4 min read",
    title: "Preparing Your Toddler for Their First School Experience",
    description:
      "Tips and strategies to help make the transition to school a positive experience for both children and parents.",
    author: "Emma Williams",
    date: "March 10, 2025",
    content: `
      <p>The first day of school is a milestone for both children and parents. Preparation can make all the difference in ensuring a smooth transition.</p>
      
      <h2>Start Early</h2>
      <p>Begin talking about school weeks before the first day. Read books about starting school, visit the campus if possible, and maintain a positive attitude.</p>
      
      <h2>Establish Routines</h2>
      <p>Practice your morning routine, including waking up, getting dressed, and eating breakfast at the time you'll need to during the school year.</p>
      
      <h2>Build Independence Skills</h2>
      <p>Help your child practice skills like putting on shoes, using the bathroom independently, and opening their lunchbox.</p>
    `,
  },
  {
    slug: "early-reading-habits-future-success",
    category: "Education",
    readTime: "6 min read",
    title: "Why Early Reading Habits Shape Future Success",
    description:
      "Learn why starting reading early can give your child lifelong learning advantages.",
    author: "Michael Chen",
    date: "March 8, 2025",
    content: `
      <p>Reading is the foundation of all learning. Children who develop strong reading habits early have advantages that extend far beyond the classroom.</p>
      
      <h2>The Science Behind Early Reading</h2>
      <p>Research shows that children exposed to reading from an early age develop stronger neural pathways for language processing and comprehension.</p>
      
      <h2>Creating a Reading-Rich Environment</h2>
      <p>Fill your home with age-appropriate books, read together daily, and model reading behavior by letting your child see you read.</p>
    `,
  },
  {
    slug: "fostering-creativity-young-minds",
    category: "Development",
    readTime: "5 min read",
    title: "Fostering Creativity in Young Minds",
    description:
      "Practical strategies to nurture your child's creative thinking and imagination.",
    author: "Lisa Anderson",
    date: "March 5, 2025",
    content: `
      <p>Creativity is not just about art – it's a critical skill that helps children solve problems, think innovatively, and adapt to new situations.</p>
      
      <h2>Provide Open-Ended Materials</h2>
      <p>Blocks, art supplies, and natural materials allow children to create without predetermined outcomes.</p>
      
      <h2>Encourage Process Over Product</h2>
      <p>Focus on the creative process rather than the end result. Ask about their thinking and choices.</p>
    `,
  },
  {
    slug: "nutrition-early-learning",
    category: "Health",
    readTime: "4 min read",
    title: "Nutrition and Its Impact on Early Learning",
    description:
      "Understanding the connection between what children eat and how they learn.",
    author: "Dr. Rebecca Martinez",
    date: "March 1, 2025",
    content: `
      <p>Good nutrition is essential for brain development and learning. What children eat directly impacts their ability to focus, learn, and grow.</p>
      
      <h2>Brain-Boosting Foods</h2>
      <p>Omega-3 fatty acids, whole grains, fruits, and vegetables provide the nutrients young brains need to thrive.</p>
      
      <h2>Healthy Eating Habits</h2>
      <p>Establish regular meal times, limit processed foods, and involve children in meal preparation.</p>
    `,
  },
  {
    slug: "emotional-intelligence-preschool",
    category: "Development",
    readTime: "7 min read",
    title: "Building Emotional Intelligence in Preschool Years",
    description:
      "How to help young children understand and manage their emotions effectively.",
    author: "James Thompson",
    date: "February 25, 2025",
    content: `
      <p>Emotional intelligence is as important as academic skills. Children who understand their emotions are better equipped to handle life's challenges.</p>
      
      <h2>Teaching Emotion Recognition</h2>
      <p>Help children identify and name their feelings. Use books, games, and real-life situations to practice.</p>
      
      <h2>Modeling Emotional Regulation</h2>
      <p>Show children healthy ways to manage difficult emotions through your own behavior.</p>
    `,
  },
];

// Utility functions
export function getBlogBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((article) => article.slug === slug);
}

export function getAllBlogs(): BlogArticle[] {
  return blogArticles;
}

export function getFeaturedBlog(): BlogArticle | undefined {
  return blogArticles.find((article) => article.featured);
}

export function getBlogsByCategory(category: string): BlogArticle[] {
  return blogArticles.filter((article) => article.category === category);
}
