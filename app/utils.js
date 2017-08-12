
/**
 * degToRad(deg) Convert a degree to radius.
 * And return the value.
 */
function degToRad(deg) {
  return deg * (Math.PI / 180);
}

/**
 * getDistanceInNauticalMiles(lat1, lon1, lat2, lon2).
 * Pass two coordinates into this function and it should return
 * the distance between them in Nautical Miles.
 */
export default function getDistanceInNauticalMiles(lat1, lon1, lat2, lon2) {
  const R = 3959; // Radius of the earth in nm
  const dLat = degToRad(lat2 - lat1); // deg2rad below
  const dLon = degToRad(lon2 - lon1);
  const a =
      (Math.sin(dLat / 2) * Math.sin(dLat / 2)) +
      (Math.cos(degToRad(lat1)) * Math.cos(degToRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2));
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in nm
  return Number((d).toFixed(1));
}
