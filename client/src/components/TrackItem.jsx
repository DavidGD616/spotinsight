import React from "react";
import { Link } from "react-router-dom";
import { formatDuration } from "../utils";

const TrackItem = ({ track }) => (
    <li>
        <Link
        className="grid grid-cols-[auto_1fr] items-center mb-[20px] md:mb-[20px] hover:[&>*]:opacity-100 focus:[&>*]:opacity-100"
        to={`/track/${track.id}`}>
            <div>
                <div className="inline-block relative w-[50px] min-w-[50px] mr-[16px]">
                    {track.album.images.length && <img src={track.album.images[2].url} alt="Album Artwork" />}
                </div>
            </div>
            <div className="grid grid-cols-[1fr_max-content] gap-[10px]">
                <span className="overflow-hidden text-ellipsis whitespace-nowrap pr-[1px]">
                    {track.name && 
                    <span 
                    className="mb-[5px] border-b border-transparent hover:border-white focus:border-white">
                        {track.name}
                    </span>}
                    {track.artists && track.album && (
                        <div className="overflow-hidden text-ellipsis whitespace-nowrap pr-[1px] text-[#9B9B9B] text-[14px] mt-[3px]">
                            {track.artists &&
                                track.artists.map(({ name }, index) => (
                                    <span key={index}>
                                        {name}
                                        {track.artists.length > 0 && index === track.artists.length - 1 ? '' : ','}&nbsp;
                                    </span>
                                ))}
                                &nbsp;&middot;&nbsp;&nbsp;
                                {track.album.name}
                        </div>
                    )}
                </span>
                <span>
                    {track.duration_ms &&
                     <span className="text-[#9B9B9B] text-[12px]">
                        {formatDuration(track.duration_ms)}
                     </span>
                    }
                </span>
            </div>
        </Link>
    </li>
)

export default TrackItem;