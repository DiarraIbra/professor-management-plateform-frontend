import { Article, Doctorant, Message, User } from '../types';

// Mock professor data
export const PROFESSOR: User = {
  id: 'prof-1',
  name: 'Pr ABDELGHANI Belakouiri',
  email: 'a.belakouiri@uca.ac.ma',
  role: 'professor',
  profileImage: 'https://images.pexels.com/photos/5952651/pexels-photo-5952651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
};

// Mock doctorants
export const DOCTORANTS: Doctorant[] = [
  {
    id: 'doc-1',
    name: 'DIARRA Ibrahima',
    email: 'i.diarra@uca.ac.ma',
    researchTopic: 'Impact des réseaux sociaux sur le marketing digital',
    dateAdded: '2025-04-15'
  },
  {
    id: 'doc-2',
    name: 'BENIAICH Mohamed',
    email: 'm.beniaich@uca.ac.ma',
    researchTopic: 'Intelligence artificielle et prise de décision en management',
    dateAdded: '2025-04-15'
  },
  {
    id: 'doc-3',
    name: 'IDBENAHMED Aissam',
    email: 'a.idbenahled@uca.ac.ma',
    researchTopic: 'Développement durable dans la supply chain',
    dateAdded: '2025-04-16'
  },
  {
    id: 'doc-4',
    name: 'LAHMAM Mohamed',
    email: 'm.lahmam@uca.ac.ma',
    researchTopic: 'Développement durable dans la supply chain',
    dateAdded: '2025-04-16'
  }
];

// Mock articles
export const ARTICLES: Article[] = [
  {
    id: 'art-1',
    title: 'Nouvelles tendances en management international',
    content: `
      <h2>Résumé</h2>
      <p>La mondialisation continue de transformer le paysage du management international. Cet article explore les nouvelles tendances qui émergent dans le domaine, notamment l'importance croissante de la diversité culturelle, l'impact de la technologie, et les défis liés à la gestion des équipes à distance.</p>
      
      <h2>Introduction</h2>
      <p>Dans un monde de plus en plus interconnecté, les pratiques de management international évoluent rapidement. Les entreprises doivent s'adapter à de nouvelles réalités économiques, sociales et technologiques.</p>
      
      <h2>Méthodologie</h2>
      <p>Notre étude s'appuie sur une analyse approfondie de la littérature récente et sur des entretiens avec des managers internationaux de premier plan.</p>
      
      <h2>Résultats et discussion</h2>
      <p>Les résultats indiquent que les entreprises qui adoptent une approche flexible et culturellement sensible du management international sont mieux positionnées pour réussir dans l'économie mondiale actuelle.</p>
      
      <h2>Conclusion</h2>
      <p>Le management international continue d'évoluer, et les organisations qui resteront à l'avant-garde seront celles qui embrasseront la diversité, adopteront les nouvelles technologies et développeront des compétences interculturelles solides.</p>
    `,
    date: '2025-04-18',
    attachment: 'management-trends-2024.pdf',
    views: [
      { doctorantId: 'doc-1', doctorantName: 'DIARRA Ibrahima', date: '2025-04-19' },
      { doctorantId: 'doc-3', doctorantName: 'IDBENAHMED Aissam', date: '2025-04-20' }
    ]
  },
  {
    id: 'art-2',
    title: 'L\'intelligence émotionnelle en leadership',
    content: `
      <h2>Résumé</h2>
      <p>L'intelligence émotionnelle (IE) est devenue un facteur crucial dans le leadership efficace. Cet article examine comment l'IE influence les performances des leaders et propose des stratégies pour développer cette compétence.</p>
      
      <h2>Introduction</h2>
      <p>Le concept d'intelligence émotionnelle a gagné en importance dans les études de leadership ces dernières décennies. Notre recherche se concentre sur son application pratique dans les contextes managériaux.</p>
      
      <h2>Cadre théorique</h2>
      <p>Nous nous appuyons sur les travaux fondateurs de Goleman et Salovey & Mayer pour construire notre cadre d'analyse de l'IE dans le leadership.</p>
      
      <h2>Méthodologie</h2>
      <p>Notre étude combine une revue systématique de la littérature avec une série d'études de cas dans des organisations variées.</p>
      
      <h2>Résultats</h2>
      <p>Les résultats indiquent une forte corrélation entre les niveaux élevés d'intelligence émotionnelle chez les leaders et divers indicateurs de performance organisationnelle, notamment la satisfaction des employés, la rétention du personnel et l'innovation.</p>
      
      <h2>Implications pratiques</h2>
      <p>Ces résultats suggèrent que les organisations devraient intégrer le développement de l'intelligence émotionnelle dans leurs programmes de formation au leadership.</p>
    `,
    date: '2025-04-20',
    attachment: 'emotional-intelligence-leadership.pdf',
    views: [
      { doctorantId: 'doc-2', doctorantName: 'BENIACH Mohamed', date: '2025-04-21' }
    ]
  },
  {
    id: 'art-3',
    title: 'Gestion du changement organisationnel à l\'ère numérique',
    content: `
      <h2>Résumé</h2>
      <p>La transformation numérique impose aux organisations de repenser leurs approches de gestion du changement. Cet article propose un cadre innovant pour naviguer dans ces transitions complexes.</p>
      
      <h2>Introduction</h2>
      <p>La digitalisation rapide des entreprises crée des défis sans précédent en matière de gestion du changement. Les modèles traditionnels se révèlent souvent inadéquats face à la nature disruptive et accélérée des transformations numériques.</p>
      
      <h2>Revue de littérature</h2>
      <p>Nous analysons les limites des modèles classiques de gestion du changement (Lewin, Kotter) dans le contexte des transformations numériques.</p>
      
      <h2>Proposition d'un nouveau cadre</h2>
      <p>Notre modèle "Digital Change Agility" intègre des éléments d'agilité, de design thinking et d'apprentissage continu pour mieux répondre aux défis contemporains.</p>
      
      <h2>Études de cas</h2>
      <p>Nous présentons trois études de cas d'organisations ayant implémenté avec succès notre cadre conceptuel lors de leurs transformations numériques.</p>
      
      <h2>Conclusion et perspectives</h2>
      <p>La gestion du changement à l'ère numérique nécessite une approche plus fluide, participative et expérimentale que les méthodes traditionnelles. Notre modèle offre un point de départ pour repenser ces pratiques.</p>
    `,
    date: '2025-04-30',
    attachment: 'digital-change-management.pdf',
    views: []
  }
];

// Mock messages
export const MESSAGES: Message[] = [
  {
    id: 'msg-1',
    senderId: 'doc-1',
    senderName: 'DIARRA Ibrahima',
    recipientId: 'prof-1',
    content: 'Bonjour Professeur, j\'ai quelques questions concernant votre dernier article sur les tendances en management international. Pourriez-vous préciser les sources utilisées pour l\'analyse des pratiques en Asie du Sud-Est ?',
    timestamp: '2025-04-19T10:30:00Z',
    isRead: true
  },
  {
    id: 'msg-2',
    senderId: 'prof-1',
    senderName: 'Pr ABDELGHANI Belakouiri',
    recipientId: 'doc-1',
    content: 'Bonjour Ibrahima, bien sûr. Les principales sources sont l\'étude de Wong & Lee (2023) et le rapport McKinsey sur les pratiques managériales en ASEAN (2022). Je vous enverrai les références complètes ce soir.',
    timestamp: '2025-04-20T11:15:00Z',
    isRead: true
  },
  {
    id: 'msg-3',
    senderId: 'doc-2',
    senderName: 'BENIAICH Mohamed',
    recipientId: 'prof-1',
    content: 'Professeur, je viens de terminer la première partie de ma revue de littérature. Pourriez-vous me suggérer une date pour discuter de mes avancées ?',
    timestamp: '2025-04-22T09:45:00Z',
    isRead: false
  },
  {
    id: 'msg-4',
    senderId: 'doc-3',
    senderName: 'IDBENAHMED Aissam',
    recipientId: 'prof-1',
    content: 'Bonjour Professeur, j\'ai trouvé votre article sur la gestion du changement très pertinent pour mon sujet de recherche. Pensez-vous que cette approche pourrait s\'appliquer spécifiquement au secteur de la logistique durable ?',
    timestamp: '2025-05-01T14:20:00Z',
    isRead: false
  }
];

// Mock users for the doctorant space
export const USERS: User[] = [
  {
    ...PROFESSOR
  },
  {
    id: 'doc-1',
    name: 'DIARRA Ibrahima',
    email: 'i.diarra@uca.ac.ma',
    role: 'doctorant',
    profileImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    researchTopic: 'Impact des réseaux sociaux sur le marketing digital'
  },
  {
    id: 'doc-2',
    name: 'BENIAICH Mohamed',
    email: 'm.beniaich@uca.ac.ma',
    role: 'doctorant',
    profileImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    researchTopic: 'Intelligence artificielle et prise de décision en management'
  },
  {
    id: 'doc-3',
    name: 'IDBENAHMED Aissam',
    email: 'id.aissam@uca.ac.ma',
    role: 'doctorant',
    profileImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    researchTopic: 'Développement durable dans la supply chain'
  }
];

// Mock messages for specific doctorant
export const getMessagesByUser = (userId: string): Message[] => {
  return MESSAGES.filter(msg => 
    msg.senderId === userId || msg.recipientId === userId
  ).sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
};

// Mock articles with doctorant views
export const getArticlesWithViews = (): Article[] => {
  return ARTICLES;
};

// Function to get doctorant by ID
export const getDoctorantById = (id: string): Doctorant | undefined => {
  return DOCTORANTS.find(doc => doc.id === id);
};

// Function to get article by ID
export const getArticleById = (id: string): Article | undefined => {
  return ARTICLES.find(article => article.id === id);
};

// Function to get user by ID
export const getUserById = (id: string): User | undefined => {
  return USERS.find(user => user.id === id);
};

// Function to mark an article as viewed by a doctorant
export const markArticleAsViewed = (articleId: string, doctorantId: string): void => {
  const article = ARTICLES.find(a => a.id === articleId);
  const doctorant = DOCTORANTS.find(d => d.id === doctorantId);
  
  if (article && doctorant && !article.views.some(v => v.doctorantId === doctorantId)) {
    article.views.push({
      doctorantId,
      doctorantName: doctorant.name,
      date: new Date().toISOString().split('T')[0]
    });
  }
};