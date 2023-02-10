import { Card, CardContacts, CardInfo, CardName, CardPhoto } from './UserCard.styled';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import defaultImg from '../../Assets/photo-cover.svg';
export const UserCard = ({ user }) => {

  return (
    <Card>
      <CardPhoto
        src={user.photo}
        alt={user.name}
        onError={e => {
          e.target.src = defaultImg;
        }}
      />
      <CardName>{user.name}</CardName>
      <div style={{ overflow: 'hidden', width: '100%' }}>
        <CardInfo>{user.position}</CardInfo>
        <CardContacts href={`mailto:${user.email}`} id={user.email}>
          {user.email}
        </CardContacts>
        <Tooltip
          anchorId={user.email}
          content={user.email}
          place="bottom"
          noArrow="true"
        />
        <CardContacts href={`tel:${user.phone}`} id={user.phone}>
          {user.phone}
        </CardContacts>
        <Tooltip
          anchorId={user.phone}
          content={user.phone}
          place="bottom"
          noArrow="true"
        />
      </div>
    </Card>
  );
};
