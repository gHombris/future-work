import React from 'react';

const ProfileCard = ({ profile, onOpenModal }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center border border-gray-200 dark:border-gray-700">
      <img 
        src={profile.foto} 
        alt={profile.nome} 
        className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-blue-500"
      />
      <h3 className="text-lg font-bold text-gray-800 dark:text-white">{profile.nome}</h3>
      <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">{profile.cargo}</p>
      <p className="text-gray-500 dark:text-gray-400 text-xs mb-4">{profile.localizacao}</p>
      
      <div className="flex flex-wrap gap-2 justify-center mb-4">
        {profile.habilidadesTecnicas.slice(0, 3).map((skill, index) => (
          <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
            {skill}
          </span>
        ))}
      </div>

      <button 
        onClick={() => onOpenModal(profile)}
        className="mt-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm transition-colors w-full"
      >
        Ver Perfil Completo
      </button>
    </div>
  );
};

export default ProfileCard;