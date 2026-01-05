import { Building2, Hotel, Home, Utensils, Store, Users, Warehouse, Briefcase } from 'lucide-react';

export function Partners() {
  const serviceAreas = [
    { name: 'Kanceláře', icon: Building2, gradient: 'from-green-500 to-emerald-500' },
    { name: 'Hotely', icon: Hotel, customColor: '#FFB84D' },
    { name: 'Airbnb byty', icon: Home, customColor: '#FFA826' },
    { name: 'Restaurace', icon: Utensils, gradient: 'from-lime-500 to-green-500' },
    { name: 'Obchody', icon: Store, gradient: 'from-teal-500 to-green-500' },
    { name: 'SVJ', icon: Users, customColor: '#E59518' },
    { name: 'Developerské projekty', icon: Warehouse, gradient: 'from-emerald-500 to-teal-500' },
    { name: 'Panelové domy', icon: Briefcase, gradient: 'from-green-600 to-lime-600' },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-10 right-1/4 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" style={{backgroundColor: '#FFA826'}}></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM0Y2ExMzciIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMTAgMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-green-200 rounded-full mb-4 shadow-lg">
            <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#FFA826'}}></div>
            <span className="text-sm text-gray-900">Oblasti působení</span>
          </div>
          <h2 className="text-4xl text-gray-900 mb-3">
            Kde <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">působíme</span>
          </h2>
          <p className="text-gray-700 text-lg">Poskytujeme profesionální úklidové služby pro různé typy prostor</p>
        </div>
        
        {/* Service Areas Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center max-w-7xl mx-auto">
          {serviceAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Glow effect */}
                <div 
                  className={`absolute -inset-2 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${area.gradient ? `bg-gradient-to-r ${area.gradient}` : ''}`}
                  style={area.customColor ? {background: `linear-gradient(to right, ${area.customColor}, ${area.customColor}dd)`} : {}}
                ></div>
                
                {/* Card */}
                <div className="relative flex flex-col items-center gap-3 p-6 bg-white border border-gray-200 rounded-2xl hover:border-green-300 hover:shadow-lg hover:scale-110 transition-all duration-300">
                  <div 
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300 ${area.gradient ? `bg-gradient-to-br ${area.gradient}` : ''}`}
                    style={area.customColor ? {background: `linear-gradient(to bottom right, ${area.customColor}, ${area.customColor}dd)`} : {}}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs text-gray-700 group-hover:text-gray-900 transition-colors text-center">
                    {area.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
