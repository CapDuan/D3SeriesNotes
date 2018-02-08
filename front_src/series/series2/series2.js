/**
 * Created by wenchao on 2018/1/25.
 */
window.onload = function () {
    log.debug(1);
}
/** 2018/1/25 - 11:38
 *---------------------------------
 * from: v_wenchaoduan
 * desc: logger init
 *
 */
var log = function (logname) {
    var logger = log4javascript.getLogger(logname);
    var debugAppender = new log4javascript.BrowserConsoleAppender();
    var appenderTrace = new log4javascript.BrowserConsoleAppender();
    var layout = new log4javascript.PatternLayout("[%p--%r]  %c message: %m %f ");
    appenderTrace.setLayout(layout);
    logger.addAppender(debugAppender);
    return logger;
}("default")