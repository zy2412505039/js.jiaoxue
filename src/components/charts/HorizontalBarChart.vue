<template> 
  <div ref="chartRef" style="width:100%;height:100%"></div> 
</template> 

<script setup> 
import { onMounted, onBeforeUnmount, ref, watch } from "vue"; 
import * as echarts from "echarts"; 

const props = defineProps({ 
  data: { 
    type: Array, 
    required: true, 
  }, 
}); 

const chartRef = ref(null); 
let chartInstance = null; 
let resizeObserver = null; 

const renderChart = () => { 
  if (!chartRef.value) return; 
  if (chartInstance) chartInstance.dispose(); 
  chartInstance = echarts.init(chartRef.value); 

  const sortedData = [...props.data].sort((a, b) => a.value - b.value); 
  const yData = sortedData.map(item => item.name); 
  const xData = sortedData.map(item => item.value); 

  const option = { 
    backgroundColor: "transparent", 
    tooltip: { 
      trigger: "axis", 
      axisPointer: { 
        type: "shadow", 
      }, 
      backgroundColor: "rgba(20, 20, 20, 0.88)", 
      borderColor: "rgba(255, 255, 255, 0.1)", 
      borderWidth: 1, 
      textStyle: { 
        color: "#ffffff", 
        fontSize: 12, 
        fontFamily: "inherit", 
      }, 
    }, 
    grid: { 
      left: "3%", 
      right: "6%", 
      bottom: "3%", 
      top: "5%", 
      containLabel: true, 
    }, 
    xAxis: { 
      type: "value", 
      axisLine: { show: false }, 
      axisTick: { show: false }, 
      splitLine: { 
        lineStyle: { 
          color: "rgba(255, 255, 255, 0.05)", 
        }, 
      }, 
      axisLabel: { 
        color: "rgba(255, 255, 255, 0.46)", 
        fontSize: 10, 
      }, 
    }, 
    yAxis: { 
      type: "category", 
      data: yData, 
      axisLine: { 
        lineStyle: { 
          color: "rgba(255, 255, 255, 0.08)", 
        }, 
      }, 
      axisTick: { show: false }, 
      axisLabel: { 
        color: "rgba(255, 255, 255, 0.72)", 
        fontSize: 11, 
      }, 
    }, 
    series: [ 
      { 
        name: "文献关联数", 
        type: "bar", 
        barWidth: "42%", 
        data: xData, 
        itemStyle: { 
          borderRadius: [0, 4, 4, 0], 
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [ 
            { offset: 0, color: "rgba(200, 168, 102, 0.08)" }, 
            { offset: 1, color: "#c8a866" }, 
          ]), 
        }, 
      }, 
    ], 
  }; 

  chartInstance.setOption(option); 

  resizeObserver = new ResizeObserver(() => { 
    chartInstance.resize(); 
  }); 
  resizeObserver.observe(chartRef.value); 
}; 

watch(() => props.data, renderChart, { deep: true }); 

onMounted(() => renderChart()); 

onBeforeUnmount(() => { 
  resizeObserver?.disconnect(); 
  chartInstance?.dispose(); 
}); 
</script>