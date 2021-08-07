import { Code, LayerVersion, Runtime } from '@aws-cdk/aws-lambda'
import { App, CfnOutput, Stack, StackProps } from '@aws-cdk/core'
import { name } from '../package.json'

export default class AWSLambdaLayerChromiumStack extends Stack {
  constructor(app: App, id: string, props: StackProps) {
    super(app, id, props)

    const layer = new LayerVersion(this, id + 'LayerVersion', {
      code: Code.fromAsset('./opt.zip'),
      compatibleRuntimes: [
        Runtime.NODEJS_10_X,
        Runtime.NODEJS_12_X,
        Runtime.NODEJS_14_X,
      ],
      layerVersionName: name,
    })

    new CfnOutput(this, id + 'LayerVersionArnOutput', {
      exportName: `${this.stackName}-layer-version-arn`,
      value: layer.layerVersionArn,
    })
  }
}
