
import {
  FaAndroid,
  FaAppStoreIos,
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaEnvelope,
} from "react-icons/fa";
import yassir from "./assets/yassir.png";
import kool from "./assets/kool.png";
import menutium from "./assets/menutium.png";
import bolt from "./assets/bolt.png";
import inDrive from "./assets/indrive.png";
import monoprix from "./assets/monoprix.png";
import aziza from "./assets/aziza.png";
import mg from "./assets/mg.png";
import dabchy from "./assets/dabchy.png";

const AppCard = ({ label, icon, android, ios }) => (
  <div className="bg-white p-6 rounded-3xl shadow-lg flex flex-col items-center text-center space-y-4 hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out">
    <div className="bg-gray-100 rounded-full h-20 w-20 flex items-center justify-center overflow-hidden">
      {icon}
    </div>
    <p className="font-semibold text-gray-900 text-lg">{label}</p>
    <div className="flex flex-wrap justify-center gap-4">
      {android && (
        <a
          href={android}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-green-600 hover:underline text-base font-semibold"
        >
          <FaAndroid className="mr-2 text-xl" />
          Android
        </a>
      )}
      {ios && (
        <a
          href={ios}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-600 hover:underline text-base font-semibold"
        >
          <FaAppStoreIos className="mr-2 text-xl" />
          iOS
        </a>
      )}
    </div>
  </div>
);

const TunisianApps = () => {


  const apps = [
    {
      label: "Yassir",
      icon: <img src={yassir} alt="Yassir" className="w-16 h-16 object-contain" />,
      android: "https://play.google.com/store/apps/details?id=com.yatechnologies.yassir_rider",
      ios: "https://apps.apple.com/tn/app/yassir/id1239926325",
    },
    {
      label: "Kool",
      icon: <img src={kool} alt="Kool" className="w-16 h-16 object-contain" />,
      android: "https://play.google.com/store/apps/details?id=com.mohamedhadiji.kool",
      ios: "https://apps.apple.com/us/app/kool-delivery/id1545409489",
    },
    {
      label: "Menutium",
      icon: <img src={menutium} alt="Menutium" className="w-16 h-16 object-contain" />,
      android: "https://play.google.com/store/apps/details?id=project.iobird.menutium",
      ios: "https://apps.apple.com/us/app/menutium/id1170811326",
    },
    {
      label: "Bolt",
      icon: <img src={bolt} alt="Bolt" className="w-16 h-16 object-contain" />,
      android: "https://play.google.com/store/apps/details?id=ee.mtakso.client",
      ios: "https://apps.apple.com/us/app/bolt-request-a-ride/id675033630",
    },
    {
      label: "inDrive",
      icon: <img src={inDrive} alt="inDrive" className="w-16 h-16 object-contain" />,
      android: "https://play.google.com/store/apps/details?id=sinet.startup.inDriver",
      ios: "https://apps.apple.com/us/app/indrive-save-on-city-rides/id780125801",
    },
    {
      label: "Monoprix",
      icon: <img src={monoprix} alt="Monoprix" className="w-16 h-16 object-contain" />,
      android: "https://play.google.com/store/apps/details?id=com.apeiron.monoprix",
      ios: "https://apps.apple.com/us/app/m-monoprix/id480953369",
    },
    {
      label: "Aziza",
      icon: <img src={aziza} alt="Aziza" className="w-16 h-16 object-contain" />,
      android: "https://play.google.com/store/search?q=aziza&c=apps",
    },
    {
      label: "MG",
      icon: <img src={mg} alt="MG" className="w-16 h-16 object-contain" />,
      android: "https://play.google.com/store/apps/details?id=com.magasingeneral.mymg",
      ios: "https://apps.apple.com/us/app/mymg-tn/id1611983617",
    },
    {
      label: "Dabchy",
      icon: <img src={dabchy} alt="Dabchy" className="w-16 h-16 object-contain" />,
      android: "https://play.google.com/store/apps/details?id=com.dabchy.mobile.dabchyapp",
      ios: "https://apps.apple.com/us/app/dabchy/id1207403847",
    },
  ];

  return (
    <div className="min-h-screen w-screen bg-gradient-to-tr from-indigo-50 via-purple-50 to-pink-50 p-8 relative">


      {/* Header (helmi habah aal isar) */}
      <header className="flex items-center space-x-4 mb-12">
        <button
          className="bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition"

        >
          <FaBars size={20} className="text-indigo-900" />
        </button>
        <h1 className="text-3xl font-extrabold text-indigo-900 drop-shadow-sm">
          Tunisian Local Apps
        </h1>
      </header>

      {/* apps */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {apps.map((app, idx) => (
          <AppCard key={idx} {...app} />
        ))}
      </div>
    </div>
  );
};

export default TunisianApps;
