export default function MapView() {
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117763.56331781486!2d75.77267014335938!3d22.72066040000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1703000000000!5m2!1sen!2sin`;

  return (
    <div className="w-full h-full bg-gray-200 relative rounded-lg overflow-hidden shadow-xl">
      <iframe
        src={mapUrl}
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Indore Map"
      ></iframe>
    </div>
  );
}
