
import moment from 'moment';
const filters={}
filters.install=(Vue)=>{
    //状态
    Vue.filter('statusFilter',(value)=>{
        if(!value){
            return '暂无'
        }
        return value
    })
    //文件大小
    Vue.filter('humanLimitSize',(bytes, si = false) => {
        let thresh = si ? 1000 : 1024;
        if (Math.abs(bytes) < thresh) {
            return bytes + 'B'
        }
        let units = si ? ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'] : ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        let u = -1
        do {
            bytes /= thresh
             ++u
            //  Math.ceil() 向上取整，小数部分直接舍去
        } while (Math.abs(bytes) >= thresh && u < units.length - 1)
        // 取两位小数
        return (Math.ceil(bytes*100)/100)+units[u]
    })
    //时间戳
    Vue.filter('dateFormat',(value, pattern = 'YYYY-MM-DD HH:mm:ss') => {
        if (value) {
            // 引入moment.js利用moment中的format方法进行转换
            // 将value转换为pattern格式
            return moment(value).format(pattern);
        }
        return '暂无'
    })
    
}

export function dateFormat(value,pattern='YYYY-MM-DD HH:mm:ss'){
    if (value) {
        return moment(value).format(pattern);
    }
    return '暂无'
}
export default filters
export const humanLimitSize = (bytes, si = false) => {
    let thresh = si ? 1000 : 1024;
    if (Math.abs(bytes) < thresh) {
        return bytes + 'B'
    }
    let units = si ? ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'] : ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    let u = -1
    do {
        bytes /= thresh
         ++u
        //  Math.ceil() 向上取整，小数部分直接舍去
    } while (Math.abs(bytes) >= thresh && u < units.length - 1)
    // 取两位小数
    return (Math.ceil(bytes*100)/100)+units[u]
}