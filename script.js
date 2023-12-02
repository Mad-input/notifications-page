let notifications = [
  {
    user: "Mark Webber",
    read: false,
    reason: "reacted to your recent post",
    strong: "My first tournament today!",
    date: "1m ago",
    image: "./assets/images/avatar-mark-webber.webp",
    message: null,
    reaction: false,
  },

  {
    user: "Angela Gray",
    read: false,
    reason: "followed you",
    strong: null,
    date: "5m ago",
    image: "./assets/images/avatar-angela-gray.webp",
    message: null,
    reaction: false,
  },

  {
    user: "Jacob Thompson",
    read: false,
    reason: "has joined your group",
    strong: "Chess Club",
    date: "1 day ago",
    image: "./assets/images/avatar-jacob-thompson.webp",
    message: null,
    reaction: false,
  },

  {
    user: "Rizky Hasanuddin",
    read: true,
    reason: "sent you a private message",
    strong: null,
    date: "5 days ago",
    image: "./assets/images/avatar-rizky-hasanuddin.webp",
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    reaction: false,
  },

  {
    user: "Kimberly Smith",
    read: true,
    reason: "commented on your picture",
    strong: null,
    date: "1 week ago",
    image: "./assets/images/avatar-kimberly-smith.webp",
    message: null,
    reaction: {
      commentedPost: {
        postImage: "assets/images/image-chess.webp",
      },
    },
  },

  {
    user: "Nathan Peterson",
    read: true,
    reason: "reacted to your recent post",
    strong: "5 end-game strategies to increase your win rate",
    date: "2 week ago",
    image: "./assets/images/avatar-nathan-peterson.webp",
    message: null,
    reaction: false,
  },

  {
    user: "Anna Kim",
    read: true,
    reason: "left the group",
    strong: "Chess Club",
    date: "2 week ago",
    image: "./assets/images/avatar-anna-kim.webp",
    message: null,
    reaction: false,
  },
];

const notificationParentElement = document.getElementById("notifications");
const noRead = document.getElementById("noRead");
const btnMark = document.getElementById("btnMark");
let countNotification = 0;

const renderNotifications = (element) => {
  notifications.map((notification) => {
    let articleHTML = document.createElement("article");
    articleHTML.classList.add("notification");
    articleHTML.innerHTML = `
            
        <div class="user_info">
            <img
                src="${notification.image}"
                alt="Person"
                class="user_image"
            />
            <div class="reason">
            <h2 class="username strong">${notification.user}</h2>
            ${notification.reason}
            <b class="strong">${
              notification.strong != null ? notification.strong : ""
            }</b>
            <b class="mark"></b>
            <div class="notifications_time">${notification.date}</div>
            </div>
        </div>
        ${
          notification.message != null
            ? `<p class="message_notification"> ${notification.message} </p>`
            : ""
        }
        ${
          notification.reaction != false
            ? `<img src="${notification.reaction.commentedPost.postImage}" alt="Post" class="post-image">`
            : ""
        }
    `;

    if (!notification.read) {
      countNotification++;
      articleHTML.classList.add("new");
    }
    if (notification.reaction != false) {
      articleHTML.classList.add("reacted");
    }

    noRead.innerText = countNotification;
    element.append(articleHTML);
  });
};

renderNotifications(notificationParentElement);

btnMark.addEventListener("click", () => {
  const newNotificationHTML = document.querySelectorAll(".notification");
  newNotificationHTML.forEach((notification) => {
    if (notification.classList.contains("new"))
      notification.classList.remove("new");
    noRead.innerText = 0;
  });
});
