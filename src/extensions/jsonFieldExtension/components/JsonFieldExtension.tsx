import { Log } from '@microsoft/sp-core-library';
import { override } from '@microsoft/decorators';
import * as React from 'react';

import ReactJson from 'react-json-view';

import styles from './JsonFieldExtension.module.scss';

export interface IJsonFieldExtensionProps {
  text: object;
}

const LOG_SOURCE: string = 'JsonFieldExtension';

export default class JsonFieldExtension extends React.Component<IJsonFieldExtensionProps, {}> {
  @override
  public componentDidMount(): void {
    Log.info(LOG_SOURCE, 'React Element: JsonFieldExtension mounted');
  }

  @override
  public componentWillUnmount(): void {
    Log.info(LOG_SOURCE, 'React Element: JsonFieldExtension unmounted');
  }

  @override
  public render(): React.ReactElement<{}> {
    return (
      <div className={styles.cell}>
        <ReactJson src={this.props.text} collapsed={true} displayDataTypes={false} />
      </div>
    );
  }
}
