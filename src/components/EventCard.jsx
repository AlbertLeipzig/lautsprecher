import { useEffect, useState } from 'react';

const placeholderImageArray = [
  'https://images.unsplash.com/photo-1445375011782-2384686778a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1517436073-3b1b1b1b1b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1517436073-3b1b1b1b1b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1517436073-3b1b1b1b1b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
];

export const EventCard = ({ event }) => {
  const [image, setImage] = useState(null);

  // function to capitalize the first letter of a string
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // function to make every word in the title start with a capital letter

  const formattedTitle = (title) => {
    const titleArray = title.split(' ');
    const formattedTitleArray = titleArray.map((word) => {
      return capitalizeFirstLetter(word);
    });
    return formattedTitleArray.join(' ');
  };

  event.title && (event.title = formattedTitle(event.title));

  useEffect(() => {
    if (event.img) {
      setImage(event.img);
    } else {
      setImage(
        placeholderImageArray[
          Math.floor(Math.random() * placeholderImageArray.length)
        ]
      );
    }
  }, [event.img]);

  return (
    <div className="event__card">
      <img src={image} alt={`${event.name} image` ?? 'event image'} />
      <div className="event__card__content">
        <h3>{event.title ?? 'event name'}</h3>
        <p className="event__subtitle">{event?.subtitle}</p>
        <p>{event.date}</p>
        <p>{capitalizeFirstLetter(event.location)}</p>
        <p>{event.price} E</p>
        <p>{event?.description.slice(0, 100)}</p>
        <a href={event.link} target={'_blank'}>
          +info
        </a>
      </div>
    </div>
  );
};
