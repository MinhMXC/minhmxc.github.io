import { ReactNode, useEffect, useState } from "react";
import { motion, useAnimate } from "motion/react";
import { OPACITY } from "./animations";

interface ContentProps {
  bgImage?: string;
  title?: string;
  footer?: ReactNode;
  children: ReactNode;
}

export default function Content({ bgImage, title, footer, children }: ContentProps) {
  const [img, setImg] = useState(bgImage);
  const [imageScope, animate] = useAnimate();

  async function changeImage(newImage: string) {
    if (newImage !== img) {
      await animate(imageScope.current, { opacity: 0 }, OPACITY.transition);
      setImg(newImage);
      animate(imageScope.current, { opacity: 0.1 }, OPACITY.transition);
    };
  }

  useEffect(() => {
    if (bgImage) {
      changeImage(bgImage);
    }
  }, [bgImage]);

  return (
    <div className="mb-content">
      <motion.img ref={imageScope} className="mb-content__image" src={img} />
      <div className="mb-content__fade"><img /></div>
      <div className="mb-content__main">
        <h1 className="mb-content__header">{title}</h1>
        <div className="mb-content__body">
          {children}
        </div>
        <div className="mb-content__footer">
          {footer}
        </div>
      </div>
    </div>
  );
}
