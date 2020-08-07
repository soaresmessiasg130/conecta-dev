import React, { useRef, useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
  Avatar,
  SvgIcon,
  IconButton,
  Popover,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar
} from '@material-ui/core';
import {
  Bell as BellIcon,
  Star as StarIcon,
  MessageCircle as MessageIcon,
  Heart as HeartIcon,
  Users as ConnectionIcon
} from 'react-feather';
import { makeStyles } from '@material-ui/core/styles';

import { GetNotifications } from '../../../../store/actions/NotificationAction';

const useStyles = makeStyles((theme) => ({
  icon: {
    background: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText
  }
}));

const iconsMap = {
  review: StarIcon,
  new_comment: MessageIcon,
  like: HeartIcon,
  connection: ConnectionIcon
}

function Notification () {
  const account = useSelector(state => state.account);
  const notifications = useSelector(state => state.notifications.notifications);
  const dispatch = useDispatch();
  const isAuthenticated = !!account.user;
  const ref = useRef(null);
  const styles = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen () {
    setIsOpen(true);
  }

  function handleClose () {
    setIsOpen(false);
  }

  useEffect(() => {
    dispatch(GetNotifications());
  }, [dispatch]);

  return (
    isAuthenticated && (
      <>
        <IconButton ref={ref} onClick={handleOpen}>
          <SvgIcon>
            <BellIcon />
          </SvgIcon>
        </IconButton>

        <Popover
          onClose={handleClose}
          open={isOpen}
          anchorEl={ref.current}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <Box p={2}>
            <Typography variant='h6'>
              Notificações
            </Typography>
          </Box>

          <List>
            {notifications && notifications.map(notification => {
              const Icon = iconsMap[notification.type];

              return (
                <ListItem key={notification.id}>
                  <ListItemAvatar>
                    <Avatar className={styles.icon}>
                      <SvgIcon>
                        <Icon />
                      </SvgIcon>
                    </Avatar>
                  </ListItemAvatar>

                  <ListItemText
                    primary={notification.title}
                    primaryTypographyProps={{
                      variant: 'subtitle2'
                    }}
                    secondary={notification.description}/>
                </ListItem>
              );
            })}
          </List>
        </Popover>
      </>
    )
  );
}

export default Notification;
