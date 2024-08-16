import { useState, useEffect } from "react";
import axios from "axios";

const usePhotos = (): string[] => {
  const [photos, setPhotos] = useState<string[]>([]);

  const fetchPhotos = async () => {
    try {
      const response = await axios.get("https://api.unsplash.com/photos/random", {
        params: { count: 9 },
        headers: {
          Authorization: `Client-ID ioPf3YzGsUgmNjLJCb7dniiL9LkXt6HFaE74zwctsjQ`,
        },
      });
      const photoUrls = response.data.map((photo: any) => photo.urls.small);
      setPhotos(photoUrls);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  useEffect(() => {
    fetchPhotos();
    const interval = setInterval(fetchPhotos, 10000);
    return () => clearInterval(interval);
  }, []);

  return photos;
};

export default usePhotos;
