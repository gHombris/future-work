import React, { useState, useEffect } from 'react';
import profilesData from './data/professionals.json'; 
import ProfileCard from './components/ProfileCard';
import ProfileModal from './components/ProfileModal';
import { Moon, Sun, Search } from 'lucide-react';

function App() {
  const [profiles, setProfiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setProfiles(profilesData);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const filteredProfiles = profiles.filter(profile => {
    const searchLower = searchTerm.toLowerCase();
    return (
      profile.nome.toLowerCase().includes(searchLower) ||
      profile.cargo.toLowerCase().includes(searchLower) ||
      profile.area.toLowerCase().includes(searchLower) ||
      profile.localizacao.toLowerCase().includes(searchLower) ||
      profile.habilidadesTecnicas.some(skill => skill.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 pb-10">
      
      <header className="bg-white dark:bg-gray-800 shadow py-4 px-6 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Future Work</h1>
          
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 hover:opacity-80"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        <div className="mb-8 relative">
          <input
            type="text"
            placeholder="Buscar por nome, cargo, habilidade ou cidade..."
            className="w-full p-4 pl-12 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-4 top-4 text-gray-400" size={20} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProfiles.length > 0 ? (
            filteredProfiles.map(profile => (
              <ProfileCard 
                key={profile.id} 
                profile={profile} 
                onOpenModal={setSelectedProfile} 
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 dark:text-gray-400">Nenhum profissional encontrado.</p>
          )}
        </div>
      </main>

      {selectedProfile && (
        <ProfileModal 
          profile={selectedProfile} 
          onClose={() => setSelectedProfile(null)} 
        />
      )}
    </div>
  );
}

export default App;