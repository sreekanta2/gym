import Image, { StaticImageData } from "next/image";
interface Photo {
  id: number;
  width: number;
  height: number;
  url: string | StaticImageData;
  src: {
    large: string;
  };
  alt: string;
  blurredDataUrl?: string;
}

type Props = {
  photo: Photo;
  sizes?: number;
};

export default function ImgContainer({ photo, sizes = 250 }: Props) {
  const widthHeightRatio = photo.height / photo.width;
  const galleryHeight = Math.ceil(sizes * widthHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / 10) + 1;

  return (
    <div
      className={`w-[${sizes}px] justify-self-center`}
      style={{ gridRow: `span ${photoSpans}` }}
    >
      <div className="grid place-content-center">
        <div className="rounded-md overflow-hidden group">
          <Image
            src={photo.url}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes={`${sizes}px`}
            placeholder="blur"
            blurDataURL={""}
            className="group-hover:opacity-75"
          />
        </div>
      </div>
    </div>
  );
}
