export const users = [
    {
        id: 1,
        name: "Mark Webber",
        photo: "public/images/avatar-mark-webber.webp",
        url: "#"
    },
    {
        id: 2,
        name: "Angela Gray",
        photo: "public/images/avatar-angela-gray.webp",
        url: "#"
    },
    {
        id: 3,
        name: "Jacob Thompson",
        photo: "public/images/avatar-jacob-thompson.webp",
        url: "#"
    },
    {
        id: 4,
        name: "Rizky Hasanuddin",
        photo: "public/images/avatar-rizky-hasanuddin.webp",
        url: "#"
    },
    {
        id: 5,
        name: "Kimberly Smith",
        photo: "public/images/avatar-kimberly-smith.webp",
        url: "#"
    },
    {
        id: 6,
        name: "Nathan Peterson",
        photo: "public/images/avatar-nathan-peterson.webp",
        url: "#"
    },
    {
        id: 7,
        name: "Anna Kim",
        photo: "public/images/avatar-anna-kim.webp",
        url: "#"
    },
]

export const activities = [
    {
        id: 1,
        activity: "reacted your recent post",
        userId: 1,
        timePast: "1m ago",
        unread: true,
        target: {
            type: "post",
            title: "My first tournament today!",
            url: "#"
        }
    },
    {
        id: 2,
        activity: "followed you",
        userId: 2,
        timePast: "5m ago",
        unread: true
    },
    {
        id: 3,
        activity: "has joined your group",
        userId: 3,
        timePast: "1 day ago",
        unread: true,
        target: {
            type: "group",
            title: "Chess Club",
            url: "#"
        }
    },
    {
        id: 4,
        activity: "sent you a private message",
        userId: 4,
        timePast: "5 days ago",
        unread: true,
        target: {
            type: "message",
            message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
            url: "#"
        }
    },
    {
        id: 5,
        activity: "commented on your picture",
        userId: 5,
        timePast: "1 week ago",
        unread: true,
        target: {
            type: "picture",
            picture: "public/images/image-chess.webp",
            url: "#"
        }
    },
    {
        id: 6,
        activity: "reacted to your recent post",
        userId: 6,
        timePast: "2 weeks ago",
        unread: true,
        target: {
            type: "post",
            title: "5 end-game strategies to increase your win rate",
            url: "#"
        }
    },
    {
        id: 7,
        activity: "left the group",
        userId: 7,
        timePast: "2 weeks ago",
        unread: true,
        target: {
            type: "group",
            title: "Chess Club",
            url: "#"
        }
    },
]