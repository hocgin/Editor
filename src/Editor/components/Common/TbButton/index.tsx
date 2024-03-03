import React from 'react';
import { Button, Tooltip } from 'antd';
import classnames from 'classnames';
import { ConfigContext } from '@/ConfigProvider';

const Index: React.FC<{
  className?: string;
  onClick?: (e) => void;
  children?: any;
  title?: string;
  prefixCls?: string;
  disabled?: boolean;
}> = ({ className, disabled = false, title, children, onClick, ...props }) => {
  let { getPrefixCls } = React.useContext(ConfigContext);
  let prefixCls = getPrefixCls('editor-e-tb-button', props.prefixCls);
  return (
    <div className={classnames(prefixCls, className)} onMouseDown={(e) => {
      e.preventDefault();
      e.stopPropagation();
      e.nativeEvent.stopPropagation();
      e.nativeEvent.preventDefault();
      e.nativeEvent.stopImmediatePropagation();
      return false;
    }}>
      <Tooltip placement="bottom" title={title}>
        <Button onClick={onClick} disabled={disabled}>
          <div onTouchStart={(e) => e.preventDefault()}>{children}</div>
        </Button>
      </Tooltip>
    </div>
  );
};

export default Index;
