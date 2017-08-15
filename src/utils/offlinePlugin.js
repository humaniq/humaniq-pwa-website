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
}