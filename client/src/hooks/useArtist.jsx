import { useEffect, useState } from "react";
import { getArtist } from "../spotify";
import { catchErrors } from "../utils";

const useArtist = (artistId) => {
    const [artist, setArtist] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getArtist(artistId);
      setArtist(data);
    };
    catchErrors(fetchData());
  }, [artistId]);

    return { artist };
}

export default useArtist;