import { classNames } from "../../common/utils";

export default function Container({ className = '', children }) {
    const classes = classNames('max-w-7xl mx-auto px-2 sm:px-6 lg:px-8', className);

    return <div className={classes}>{children}</div>
}