import * as OfflinePlugin from 'offline-plugin/runtime';

export default function() {
  OfflinePlugin.install({
    onInstalled: function() {},
    onUpdating: function() {},
    onUpdateReady: function() {
      OfflinePlugin.applyUpdate();
    },
    onUpdated: function() {
      window.location.reload();
    }
  });

  (function() {
    //TODO: here we can detect network status and update content
    window.addEventListener('offline', function() {
      window.console.log('offline');
    });
    window.addEventListener('online', function() {
      window.console.log('online')
    })
  })();
}