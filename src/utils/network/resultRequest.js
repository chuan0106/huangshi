/**
 * Copyright(C) 2018,by xskj,All rights reserved
 *
 * @date 2018年10月9日
 * @author lqq
 * @desc
 *
 */
import { message } from 'antd';
import { requestError, requestErrorMessage, resultMessage } from './requestError';
export function dealResultRequest(result) {
  if (result.err) {
    switch (result.err.name) {
      case requestError.ReferenceError:
        message.error(requestErrorMessage.ReferenceError);
        break;
      case requestError.TypeError:
        message.error(requestErrorMessage.TypeError);

        break;
      case requestError.RangeError:
        message.error(requestErrorMessage.RangeError);

        break;
      case requestError.SyntaxError:
        message.error(requestErrorMessage.ReferSyntaxErrorenceError);

        break;
      case requestError.EvalError:
        message.error(requestErrorMessage.EvalError);

        break;
      case requestError.URIError:
        message.error(requestErrorMessage.URIError);

        break;
      default:
    }
  } else {
    if (result.data.result) {
      if (result.data.data !== null) {
        return true;
      } else {
        message.error(resultMessage.returnDataNull);
      }
    } else {
      // notification.error({
      //   message: result.data.error,
      //   description: "请检查",
      // });
      //throw "woshileiqiqi"
      message.error(result.data.error);
    }
  }
}
