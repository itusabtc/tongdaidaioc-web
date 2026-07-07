'use client';

import { useEffect, useRef } from 'react';

interface ListingMapProps {
  latitude?: number;
  longitude?: number;
  addressText?: string;
  title?: string;
}

export default function ListingMap({ latitude, longitude, addressText, title }: ListingMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Import Leaflet CSS
    if (!document.getElementById('leaflet-css')) {
      const link = document.createElement('link');
      link.id = 'leaflet-css';
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css';
      document.head.appendChild(link);
    }

    // Import Leaflet JS
    if (!(window as any).L) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
      script.onload = () => initMap();
      document.body.appendChild(script);
    } else {
      initMap();
    }

    function initMap() {
      const L = (window as any).L;
      if (!L) return;

      // Default to HCMC if no coordinates
      const lat = latitude || 10.7769;
      const lng = longitude || 106.7009;

      if (map.current) {
        map.current.setView([lat, lng], 16);
        return;
      }

      map.current = L.map(mapContainer.current).setView([lat, lng], 16);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(map.current);

      const safeTitle = title || 'Vị trí';
      const safeAddress = addressText || 'TP.HCM';
      const popupContainer = document.createElement('div');
      const strong = document.createElement('strong');
      strong.textContent = safeTitle;
      const br = document.createElement('br');
      const addressNode = document.createTextNode(safeAddress);
      popupContainer.appendChild(strong);
      popupContainer.appendChild(br);
      popupContainer.appendChild(addressNode);

      L.marker([lat, lng]).addTo(map.current).bindPopup(popupContainer).openPopup();
    }
  }, [latitude, longitude, addressText, title]);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="mb-0">
        <h3 className="text-lg font-bold p-6 border-b border-gray-200 text-gray-900">Vị trí</h3>
      </div>
      <div
        ref={mapContainer}
        className="w-full h-96 bg-gray-100"
        style={{ minHeight: '400px' }}
      />
      {addressText && (
        <div className="p-4 bg-gray-50 border-t border-gray-200">
          <p className="text-sm text-gray-600">Địa chỉ:</p>
          <p className="font-medium text-gray-900">{addressText}</p>
        </div>
      )}
    </div>
  );
}
