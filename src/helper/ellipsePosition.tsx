import ellipse from '../../public/image/Ellipse.png'
const ellipsePositions = [
    { left: 'left-24', top: 'top-56' },
    { right: 'right-96', top: 'top-36' },
    { left: 'left-64', bottom: 'bottom-24' },
    { right: 'right-40', top: 'top-64' },
  ];

  export const ellipseBaseClass = 'z-20 animate-ping w-6 absolute';

  export default ellipsePositions;

 export const renderEllipses = () =>{
    return ellipsePositions.map((pos, index) => (
        <img
          key={index}
          src={ellipse}
          alt={`Animated ellipse ${index + 1}`}
          className={`${ellipseBaseClass} ${pos.left || ''} ${pos.right || ''} ${pos.top || ''} ${pos.bottom || ''}`}
        />
      ));
 }