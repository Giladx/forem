function triggerIcon(page, triggerID) {
  var currentPage = document.getElementById('page-content').dataset.currentPage;
  var trigger = document.getElementById(triggerID);

  if (trigger) {
    if (currentPage === page) {
      trigger.blur();
      trigger.classList.add('top-bar__icon--current');
    } else {
      trigger.classList.remove('top-bar__icon--current');
    }
  }
}

function initializeTopBarIcons() {
  triggerIcon('notifications-index', 'notifications-link');
  triggerIcon('chat_channels-index', 'connect-link');
  triggerIcon('moderations-index', 'moderation-link');
  triggerIcon('stories-search', 'search-link');
}

document.querySelectorAll('.top-bar__icon').forEach(function (icon) {
  icon.addEventListener('click', initializeTopBarIcons);
});
