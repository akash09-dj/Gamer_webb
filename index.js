import React from "react";
import { motion } from "framer-motion";

const mockProjects = [
  {
    id: "1",
    title: "CrownCraft Texture Pack",
    author: "Akash",
    description: "A shiny purple-themed resource pack with enchanted effects.",
    downloads: 12456,
    version: "1.21",
    thumbnail: "https://via.placeholder.com/520x300?text=CrownCraft",
    tags: ["Texture Pack", "1.21", "Resource"]
  },
  {
    id: "2",
    title: "NightVision Fabric Mod",
    author: "Akash",
    description: "Press a key to toggle infinite night vision (Fabric).",
    downloads: 8421,
    version: "1.21",
    thumbnail: "https://via.placeholder.com/520x300?text=NightVision+Mod",
    tags: ["Fabric", "Mod", "Gameplay"]
  },
  {
    id: "3",
    title: "Minimal UI Pack",
    author: "Akash",
    description: "Clean, minimal textures and HUD for a modern Minecraft look.",
    downloads: 6042,
    version: "1.20+",
    thumbnail: "https://via.placeholder.com/520x300?text=Minimal+UI",
    tags: ["Texture Pack", "UI"]
  }
];

function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center font-bold text-xl">
            Y
          </div>
          <div>
            <h1 className="text-xl font-semibold">Yournix</h1>
            <p className="text-sm text-white/90">Upload, share and discover Minecraft mods & packs</p>
          </div>
        </div>

        <nav className="hidden md:flex gap-4 items-center">
          <a className="px-3 py-2 rounded-md hover:bg-white/10" href="#browse">Browse</a>
          <a className="px-3 py-2 rounded-md hover:bg-white/10" href="#upload">Upload</a>
          <a className="px-3 py-2 rounded-md hover:bg-white/10" href="#about">About</a>
          <button className="bg-white/20 px-3 py-2 rounded-md">Sign in</button>
        </nav>

        <div className="md:hidden">
          <button className="px-3 py-2 bg-white/10 rounded-md">Menu</button>
        </div>
      </div>
    </header>
  );
}

function SearchHero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="bg-white/5 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-3xl font-extrabold">Discover mods & texture packs on <span className="text-purple-300">Yournix</span></h2>
          <p className="mt-3 text-white/80">Fast uploads, versioned downloads, and community-driven features — built for creators like you.</p>

          <div className="mt-6 flex gap-2">
            <input className="flex-1 rounded-lg px-4 py-3 bg-white/5 outline-none" placeholder="Search mods, packs, tags..." />
            <button className="px-4 py-3 rounded-lg bg-purple-600">Search</button>
          </div>

          <div className="mt-6 flex gap-3 text-sm text-white/80">
            <span className="px-2 py-1 bg-white/5 rounded">Fabric</span>
            <span className="px-2 py-1 bg-white/5 rounded">Forge</span>
            <span className="px-2 py-1 bg-white/5 rounded">Resource Packs</span>
            <span className="px-2 py-1 bg-white/5 rounded">Shaders</span>
          </div>
        </div>

        <div className="flex-1">
          <img className="rounded-xl shadow-2xl" src="https://via.placeholder.com/720x420?text=Yournix+Showcase" alt="showcase" />
        </div>
      </div>
    </section>
  );
}

function FeaturedGrid({ projects = [] }) {
  return (
    <section id="browse" className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">Featured</h3>
        <a className="text-sm text-white/80">See all</a>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <motion.a
            key={p.id}
            whileHover={{ scale: 1.02 }}
            className="block rounded-xl overflow-hidden bg-white/3"
            href={`/project/${p.id}`}>
            <div className="h-44 md:h-48 w-full">
              <img className="w-full h-full object-cover" src={p.thumbnail} alt={p.title} />
            </div>
            <div className="p-4">
              <h4 className="font-semibold">{p.title}</h4>
              <p className="text-sm text-white/70 mt-1">{p.description}</p>

              <div className="mt-3 flex items-center justify-between text-sm text-white/70">
                <div>{p.author}</div>
                <div>⬇ {p.downloads.toLocaleString()}</div>
              </div>

              <div className="mt-3 flex gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 bg-white/5 rounded">{t}</span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

function UploadCTA() {
  return (
    <section id="upload" className="max-w-6xl mx-auto px-6 py-12">
      <div className="rounded-2xl bg-gradient-to-r from-white/5 to-white/3 p-8 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">Have a mod or pack to share?</h3>
          <p className="text-white/80 mt-2">Create a project, upload builds and manage versions. You control files & descriptions.</p>
        </div>
        <div className="flex gap-3">
          <a className="px-4 py-3 rounded-md bg-purple-600">Create Project</a>
          <a className="px-4 py-3 rounded-md border border-white/10">Learn More</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-12 bg-black/60 text-white/80 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start justify-between gap-6">
        <div>
          <h4 className="font-bold">Yournix</h4>
          <p className="text-sm mt-2">Made for creators. Hosted by you.</p>
        </div>

        <div className="flex gap-6">
          <div>
            <h5 className="font-semibold">Community</h5>
            <ul className="mt-2 text-sm text-white/70">
              <li>Forums</li>
              <li>Discord</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold">Support</h5>
            <ul className="mt-2 text-sm text-white/70">
              <li>Docs</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function YournixLanding() {
  return (
    <div className="min-h-screen text-white">
      <Header />
      <main>
        <SearchHero />
        <FeaturedGrid projects={mockProjects} />
        <UploadCTA />
      </main>
      <Footer />
    </div>
  );
}
