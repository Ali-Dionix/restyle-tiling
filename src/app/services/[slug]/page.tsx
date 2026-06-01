import { notFound } from "next/navigation";
import ServicePageClient from "./ServicePageClient";
import { Metadata } from "next";

interface Feature {
  title: string;
  description: string;
}

interface WhyUsItem {
  title: string;
  description: string;
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
  features: Feature[];
  whyUs: WhyUsItem[];
  process: ProcessStep[];
  faqs: FAQ[];
}

const servicesData: Record<string, ServiceData> = {
  "wall-tiling": {
    title: "Wall Tiling Services",
    subtitle: "Precision wall tiling for bathrooms, kitchens, splashbacks, and feature walls.",
    category: "Wall Tiling",
    image: "/images/wall-tiling.png",
    description: "We install wall tiles of all types, including ceramic, porcelain, mosaic, metro (subway) tiles, and natural stone. Whether it's a sleek kitchen splashback, a fully tiled bathroom, or a stunning feature wall, our precision alignment and clean grouting create a pristine finish that transforms your interior spaces.",
    features: [
      { title: "Splashback Tiling", description: "Kitchen and utility splashbacks aligned perfectly with your worktops and cupboards." },
      { title: "Feature Walls", description: "Make a bold design statement in your living rooms, hallways, bathrooms, or commercial receptions." },
      { title: "Shower Enclosures", description: "Fully waterproofed and sealed backing systems with neat, clean tiling layout." },
      { title: "Porcelain & Ceramic", description: "Expert cutting and placement of all standard wall tile formats and styles." }
    ],
    whyUs: [
      { title: "Laser-Level Accuracy", description: "Perfect alignment for straight horizontal and vertical lines across every wall." },
      { title: "Precision Cutouts", description: "Clean cuts for electrical sockets, switches, pipework, and bathroom fixtures." },
      { title: "Premium Adhesives", description: "We use high-grade flexible wall adhesives and waterproof backing boards where needed." }
    ],
    process: [
      { step: "01", title: "Surface Preparation", description: "Checking wall flatness, repairing plaster, and applying waterproofing tanking membranes in wet zones." },
      { step: "02", title: "Layout Mapping", description: "Using laser levels to plan the layout, centering the pattern to avoid thin cuts at the corners." },
      { step: "03", title: "Precision Tiling", description: "Applying flexible adhesive and setting tiles with even, consistent spacers." },
      { step: "04", title: "Grouting & Cleaning", description: "Filling joints with premium grout and cleaning tile faces thoroughly to avoid hazing." },
      { step: "05", title: "Silicone Sealing", description: "Applying sanitary, mould-resistant silicone along corners, worktops, and shower margins." }
    ],
    faqs: [
      { question: "Do you repair the walls before tiling?", answer: "Yes. Tiling requires a flat surface. We inspect your walls and perform minor plaster repairs, apply bonding agents, or install backer boards to ensure a perfectly flat base." },
      { question: "How long does a kitchen splashback take to tile?", answer: "A standard kitchen splashback is typically completed in 1 day, including cutting, tiling, grouting, and silicone sealing." },
      { question: "Can you tile over existing wall tiles?", answer: "We strongly advise against it. Tiling over old tiles adds extra weight to the wall, reduces bonding strength, and makes alignment less accurate. We always recommend stripping back to the substrate." }
    ]
  },
  "floor-tiling": {
    title: "Floor Tiling Services",
    subtitle: "Durable, hard-wearing, and perfectly level floor tiles for kitchens, hallways, and living areas.",
    category: "Floor Tiling",
    image: "/images/floor-tiling.png",
    description: "Floor tiling requires robust preparation and precise execution to handle heavy foot traffic and ensure a flat surface. We work with large format porcelain, ceramic, natural stone, and wood-effect tiles. We ensure full adhesive coverage and professional floor preparation to guarantee a lifetime of durability and style.",
    features: [
      { title: "Large Format Tiles", description: "Sleek, modern large-format tiles installed with perfect flatness and minimal grout lines." },
      { title: "Underfloor Heating Integration", description: "Tiling compatible with both electric wire and wet underfloor heating systems." },
      { title: "Decoupling Membranes", description: "Anti-fracture matting (like DITRA) installation to prevent cracked tiles from subfloor movement." },
      { title: "Hallways & Kitchens", description: "Resilient tiling for heavy-traffic entryways and kitchen floors." }
    ],
    whyUs: [
      { title: "Self-Leveling Subfloors", description: "We apply self-leveling screed to ensure a flat, stable substrate before tiling." },
      { title: "100% Solid Adhesive Bed", description: "We use the back-buttering method on tiles to ensure zero air gaps and maximum durability." },
      { title: "Movement Joints", description: "Carefully placed expansion joints to protect your floor against temperature changes." }
    ],
    process: [
      { step: "01", title: "Subfloor Prep", description: "Cleaning, priming, and applying self-leveling compound or plywood overlay as required." },
      { step: "02", title: "Decoupling Matting", description: "Installing anti-fracture membranes to decouple the tiles from subfloor expansion and flex." },
      { step: "03", title: "Laser Level Grid", description: "Finding the center of the room and planning the layout to ensure a balanced, symmetric look." },
      { step: "04", title: "Tiling & Leveling", description: "Using floor adhesive and a leveling clip system to eliminate lippage between tiles." },
      { step: "05", title: "Grouting & Seal", description: "Applying heavy-duty floor grout and perimeter expansion joints for durability." }
    ],
    faqs: [
      { question: "How long before I can walk on my tiled floor?", answer: "Normally, you can walk on the floor 24 hours after completion. We use rapid-setting flexible adhesives, but they still require curing time to prevent tiles from shifting." },
      { question: "What is a decoupling membrane, and is it necessary?", answer: "A decoupling membrane (like DITRA matting) absorbs lateral movement in the subfloor (like wood expansion or screed shrinkage). It prevents these forces from transferring to the tile, stopping cracks." },
      { question: "Can you tile over floorboards?", answer: "Yes, but we must first ensure they are secure and free of flex. We overlay the floorboards with cement backer boards or decoupling membranes to provide a rigid, flat surface." }
    ]
  },
  "bathroom-tiling": {
    title: "Bathroom Tiling Services",
    subtitle: "Waterproof bathroom tiling, custom wetrooms, and walk-in shower enclosures.",
    category: "Bathroom Tiling",
    image: "/images/bathroom-tiling.png",
    description: "Bathroom tiling demands 100% waterproof construction to protect your home. We specialise in full bathroom transformations, walk-in showers, and wetrooms. We apply professional tanking (waterproofing) systems behind every tile, ensuring your beautiful new bathroom is completely leak-proof and built to last.",
    features: [
      { title: "Shower Tanking", description: "Professional liquid waterproofing barrier application before tiling to guarantee zero leaks." },
      { title: "Wetroom Installations", description: "Sloped floor tray tiling with precise drainage integration for modern wetrooms." },
      { title: "Custom Tiled Niches", description: "Recessed, fully waterproofed shampoo niches and vanity shelves integrated into the walls." },
      { title: "Mitred External Corners", description: "Neat jolly cuts (mitred tile edges) or premium metal profile trims for external corners." }
    ],
    whyUs: [
      { title: "Certified Waterproofing", description: "We use industry-approved tanking systems behind all wet areas." },
      { title: "Mould-Resistant Finishes", description: "We use anti-fungal grouts and silicone to prevent discolouration and hygiene issues." },
      { title: "Attention to Detail", description: "Symmetric layouts aligned with shower valves, niches, and bath rims." }
    ],
    process: [
      { step: "01", title: "Tanking (Waterproofing)", description: "Applying liquid membranes and reinforcing tape to all shower and bath wet zones." },
      { step: "02", title: "Layout & Fixture Alignment", description: "Mapping tile lines to align with niches, bath borders, and shower mixers." },
      { step: "03", title: "Precision Tile Installation", description: "Laying wall and floor tiles, cutting custom holes for pipe valves and drains." },
      { step: "04", title: "Sanitary Grouting", description: "Applying water-repellent grout to seal joints and prevent moisture penetration." },
      { step: "05", title: "Anti-fungal Silicone", description: "Applying neat silicone beads along internal corners and joint lines to complete the seal." }
    ],
    faqs: [
      { question: "Is tanking (waterproofing) really necessary?", answer: "Absolutely. In wet areas like showers, grout and tiles alone are not waterproof. Water will eventually penetrate and rot plasterboard. Tanking creates a watertight barrier underneath the tiles." },
      { question: "Can you build a tiled niche in my shower wall?", answer: "Yes, custom recessed niches are one of our specialties. They provide a sleek, modern storage space for shampoo and soap without sticking out." },
      { question: "What tiles are best for a bathroom floor?", answer: "We recommend slip-resistant (R10 or higher rating) porcelain or ceramic tiles for bathroom floors. Textured surfaces or mosaic tiles provide better grip underfoot when wet." }
    ]
  },
  "kitchen-tiling": {
    title: "Kitchen Tiling Services",
    subtitle: "Heat-resistant, practical, and stunning tile finishes for the heart of your home.",
    category: "Kitchen Tiling",
    image: "/images/kitchen-tiling.png",
    description: "The kitchen is the focal point of most homes, demanding a balance of beautiful design and hard-wearing practicality. From vibrant, grease-resistant splashbacks to heavy-duty floor tiles, we deliver premium installations that stand up to daily culinary activity and spills.",
    features: [
      { title: "Splashback Designs", description: "Metro, herringbone, mosaic, and geometric wall patterns tailored to your style." },
      { title: "Heavy-Duty Floor Tiling", description: "Durable porcelain floors that are scratch-resistant and easy to clean." },
      { title: "Socket & Cabinet Fitting", description: "Perfect socket cutouts and alignment with worktops and cabinetry." },
      { title: "Kitchen Islands", description: "Custom tiled plinths or accent panels underneath breakfast bars." }
    ],
    whyUs: [
      { title: "Stain-Resistant Grout", description: "We use high-quality, dense grouts that resist kitchen stains and grease absorption." },
      { title: "Precision Socket Cutouts", description: "Using diamond blades to ensure wall sockets sit flush and neat against the tiles." },
      { title: "Seamless Joint Alignment", description: "Matching layout lines between floor tiles and splashbacks for visual flow." }
    ],
    process: [
      { step: "01", title: "Surface Protection", description: "Protecting kitchen worktops, cupboards, and appliances from dust and grout." },
      { step: "02", title: "Electrical Prep", description: "Backing off electrical sockets to ensure tiles fit neatly behind the cover plates." },
      { step: "03", title: "Layout Setup", description: "Setting a level base line above the worktop and planning patterns (e.g., brick bond or herringbone)." },
      { step: "04", title: "Tiling & Cutting", description: "Cutting tiles around windows, corners, and sockets, and sticking them with premium adhesive." },
      { step: "05", title: "Grout & Worktop Seal", description: "Applying grease-resistant grout and a food-grade silicone seal along the worktop joint." }
    ],
    faqs: [
      { question: "Do you remove the existing kitchen splashback?", answer: "Yes, we remove old tiles and prep the wall. If the plasterboard gets damaged during removal, we repair or replace it so the new tiles have a flat surface." },
      { question: "Is tile suitable behind a gas hob?", answer: "Yes, ceramic and porcelain tiles are completely fireproof and heat-resistant, making them the most practical and safe choice for behind hobs." },
      { question: "Can you tile under kitchen cabinets?", answer: "Yes, we always tile the floor before cabinets are fitted (if doing a full refit), or tile right up to the cabinet plinths for a neat, finished edge." }
    ]
  },
  "tile-repairs": {
    title: "Tile Repairs & Replacement",
    subtitle: "Seamless repairs for cracked, loose, or damaged tiles without retiling the entire room.",
    category: "Tile Repairs",
    image: "/images/tile-repairs.png",
    description: "Over time, individual tiles can crack or come loose due to physical impact or subfloor movement. We provide targeted repair services, carefully extracting damaged tiles, cleaning the substrate, and replacing them with a neat matching finish, saving you the expense of a full renovation.",
    features: [
      { title: "Single Tile Extraction", description: "Dust-minimized removal of damaged tiles without affecting surrounding tiles." },
      { title: "Substrate Cleaning", description: "Scraping away old, dried adhesive to create a clean, level bed for the replacement tile." },
      { title: "Matching Grout & Silicone", description: "Sourcing and blending new grout to match the weathered shade of existing joints." },
      { title: "Loose Tile Repair", description: "Investigating the cause of loose tiles and re-bonding them securely." }
    ],
    whyUs: [
      { title: "Surgical Precision", description: "We use specialised oscillating multi-tools to isolate the grout joint before extracting tiles." },
      { title: "Root Cause Investigation", description: "We inspect the substrate to ensure moisture or structural flex won't cause future failures." },
      { title: "Cost-Effective", description: "We save you the cost of retiling a whole room by resolving localized damage." }
    ],
    process: [
      { step: "01", title: "Grout Isolation", description: "Raking out the grout surrounding the damaged tile to prevent chipping adjacent tiles." },
      { step: "02", title: "Tile Extraction", description: "Carefully breaking and removing the damaged tile pieces from the center outward." },
      { step: "03", title: "Substrate Preparation", description: "Chipping away old adhesive and applying a bonding primer to the substrate." },
      { step: "04", title: "Tile Refitting", description: "Laying the replacement tile using flexible rapid-set adhesive, matching levels exactly." },
      { step: "05", title: "Re-grouting", description: "Color-matching and applying new grout, followed by silicone touch-ups if required." }
    ],
    faqs: [
      { question: "Do you have spare tiles?", answer: "Normally, the customer must provide the spare tiles. Tiles are manufactured in batches (shade runs), and buying a perfect match years later is very difficult. Leftover tiles from the original job are ideal." },
      { question: "Why did my tiles come loose or crack?", answer: "Usually, this is due to movement in the wooden subfloor, lack of expansion joints, or poor adhesive coverage. We will examine the cause during extraction and advise if the substrate needs extra work." },
      { question: "Can you repair cracked grout lines?", answer: "Yes. If your tiles are secure but the grout is cracked or falling out, we can rake out the old grout and re-apply fresh grout to seal the joints." }
    ]
  },
  "grouting-finishing": {
    title: "Grouting & Finishing Services",
    subtitle: "Professional re-grouting, silicone replacement, and finishing to restore a brand-new look.",
    category: "Grouting & Finishing",
    image: "/images/grouting-finishing.png",
    description: "Dirty, stained, or crumbling grout and mouldy silicone can ruin the appearance of otherwise perfect tiling and lead to water leaks. Our grouting and finishing service refreshes your tiled areas by removing old grout and silicone and replacing them with fresh, mould-resistant, color-matched materials.",
    features: [
      { title: "Grout Removal & Raking", description: "Extracting old grout using specialised diamond-tipped grout rakes and multi-tools." },
      { title: "Anti-Mould Re-grouting", description: "Re-applying fresh, premium polymer-modified grout in your choice of color." },
      { title: "Silicone Replacement", description: "Stripping old, mouldy silicone sealant and applying a neat, watertight sanitary seal." },
      { title: "Tile Sealing & Protection", description: "Applying protective impregnating sealers to porous tiles or natural stone." }
    ],
    whyUs: [
      { title: "Neat Silicone Profiling", description: "Perfect, smooth silicone beads that look professional and provide a robust seal." },
      { title: "High-Performance Grouts", description: "We use grouts with anti-efflorescence and water-repellent properties." },
      { title: "Zero Damage Guarantee", description: "Careful grout extraction to prevent chipping your existing tiles." }
    ],
    process: [
      { step: "01", title: "Grout Raking", description: "Raking out old grout to a depth of at least 3mm using diamond-tipped blades." },
      { step: "02", title: "Joint Deep Clean", description: "Vacuuming and scrubbing joints to ensure a clean, dust-free surface for new grout bonding." },
      { step: "03", title: "New Grout Packing", description: "Mixing and firmly packing new grout into the joints with professional floats." },
      { step: "04", title: "Buffing & Cleanup", description: "Washing off grout residue and buffing tiles to remove any haze." },
      { step: "05", title: "Silicone Sealant", description: "Removing old silicone, cleaning with alcohol, and applying fresh mould-resistant silicone." }
    ],
    faqs: [
      { question: "Can you change the grout color?", answer: "Yes, absolutely! Removing the old grout and replacing it with a new color (like going from white to charcoal) can completely change the look and style of your tiled room." },
      { question: "How long after re-grouting can I use my shower?", answer: "We recommend waiting 24 to 48 hours to allow the new grout and silicone sealant to fully cure and form a watertight barrier." },
      { question: "Why is my silicone getting mouldy?", answer: "Sanitary silicone has anti-fungal agents, but over time, soap scum and moisture build-up will degrade them, especially in poorly ventilated bathrooms. Routine cleaning helps, but eventual replacement is normal." }
    ]
  }
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested tiling service does not exist."
    };
  }

  return {
    title: `${service.title} | Restyle Wall & Floor Tiling`,
    description: service.subtitle,
    openGraph: {
      title: `${service.title} | Restyle Wall & Floor Tiling`,
      description: service.subtitle,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 800,
          alt: service.title
        }
      ]
    }
  };
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug
  }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return <ServicePageClient service={service} />;
}
