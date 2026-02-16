import TopNav from "../rider/TopNav";
import Sidebar from "../rider/Sidebar";
import MapView from "../rider/MapView";

export default function Rider() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      <TopNav />

      <div className="h-[calc(100vh-73px)] p-6">
        <div className="h-full grid grid-cols-[400px_1fr] gap-6">
          <div className="h-full">
            <Sidebar />
          </div>

          <div className="h-full">
            <MapView />
          </div>
        </div>
      </div>
    </div>
  );
}
