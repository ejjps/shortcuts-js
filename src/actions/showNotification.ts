import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Show Notification
 * @section Actions > Scripting > Notification
 * @icon Notification
 *
 * Displays a local notification.
 *
 * ```js
 * showNotification({
 *  title: 'Hello, World!',
 *  body: 'This is a test notification',
 *  sound: true,
 * });
 * ```
 */

const showNotification = (
  {
    title = '',
    body = 'Hello World',
    sound = true,
  }: {
    /** Title for the notification */
    title ?: string,
    /** Body for the notification */
    body ?: string,
    /** Enable or disable sound for the notification */
    sound ?: boolean,
  },
): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.notification',
  WFWorkflowActionParameters: {
    WFNotificationActionTitle: title,
    WFNotificationActionBody: body,
    WFNotificationActionSound: sound,
  },
});

export default showNotification;
