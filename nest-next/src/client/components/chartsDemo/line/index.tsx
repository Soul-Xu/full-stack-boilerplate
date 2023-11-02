import { Line } from "@antv/g2plot"
import { useEffect } from "react";
import { data } from "./constants"

const LineDemo = () => {
  useEffect(() => {
    const line = new Line("line-container", {
      data,
      padding: 'auto',
      xField: 'Date',
      yField: 'scales',
      xAxis: {
        // type: 'timeCat',
        tickCount: 5,
      },
    })
    line.render();
  }, [])

  return (
    <div id="line-container"></div>
  )
}

export default LineDemo