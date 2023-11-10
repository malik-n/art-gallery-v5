import PeopleIcon from "@mui/icons-material/People";
import CollectionsIcon from "@mui/icons-material/Collections";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import PhoneIcon from "@mui/icons-material/Phone";

export const mainNavbarItems = [
  {
    id: 0,
    icon: <PeopleIcon />,
    label: "Artists",
    route: "artists",
  },
  {
    id: 1,
    icon: <CollectionsIcon />,
    label: "Paintings",
    route: "paintings",
  },
  {
    id: 2,
    icon: <AccountBalanceIcon />,
    label: "Gallery",
    route: "gallery",
  },
  {
    id: 3,
    icon: <BookOnlineIcon />,
    label: "Tickets",
    route: "tickets",
  },
  {
    id: 4,
    icon: <VolunteerActivismIcon />,
    label: "Donate",
    route: "donate",
  },
  {
    id: 5,
    icon: <PhoneIcon />,
    label: "Contact Us",
    route: "contact",
  },
];
