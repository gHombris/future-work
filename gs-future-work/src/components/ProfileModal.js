import React from 'react';
import { X } from 'lucide-react';

const ProfileModal = ({ profile, onClose }) => {
  if (!profile) return null;

  const handleRecomendar = () => alert(`Você recomendou ${profile.nome}!`);
  const handleMensagem = () => alert(`Mensagem enviada para ${profile.nome}.`);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 overflow-y-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto relative shadow-2xl">
        
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-red-500">
          <X size={24} />
        </button>

        <div className="p-8">
          <div className="flex items-center gap-6 mb-6">
            <img src={profile.foto} alt={profile.nome} className="w-24 h-24 rounded-full object-cover" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{profile.nome}</h2>
              <p className="text-blue-600 text-lg">{profile.cargo}</p>
              <p className="text-gray-500 text-sm">{profile.localizacao}</p>
            </div>
          </div>

          <div className="space-y-4">
            <section>
              <h3 className="font-bold text-gray-800 dark:text-gray-200 border-b pb-1 mb-2">Sobre</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{profile.resumo}</p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <section>
                    <h3 className="font-bold text-gray-800 dark:text-gray-200 border-b pb-1 mb-2">Hard Skills</h3>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                        {profile.habilidadesTecnicas.map(s => <li key={s}>{s}</li>)}
                    </ul>
                </section>
                <section>
                    <h3 className="font-bold text-gray-800 dark:text-gray-200 border-b pb-1 mb-2">Soft Skills</h3>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                        {profile.softSkills.map(s => <li key={s}>{s}</li>)}
                    </ul>
                </section>
            </div>

            <section>
              <h3 className="font-bold text-gray-800 dark:text-gray-200 border-b pb-1 mb-2">Experiência</h3>
              {profile.experiencias.map((exp, i) => (
                <div key={i} className="mb-2">
                  <p className="font-semibold text-sm text-gray-800 dark:text-white">{exp.cargo} - {exp.empresa}</p>
                  <p className="text-xs text-gray-500">{exp.inicio} até {exp.fim}</p>
                </div>
              ))}
            </section>
          </div>

          <div className="mt-8 flex gap-4">
            <button onClick={handleRecomendar} className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded font-medium transition">
              Recomendar
            </button>
            <button onClick={handleMensagem} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-medium transition">
              Mensagem
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;