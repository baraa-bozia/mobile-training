import { useColorScheme, View } from 'react-native'
import { Colors } from '../constants/colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const ThemedView = ({ style,safe=false, ...props }) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light


  if(!safe) return (
    <View 
      style={[{ backgroundColor: theme.background }, style]}
      {...props}
    />
  )
  const insets = useSafeAreaInsets() // بناء على نوع الجهاز 
  // بناء على نوع الجهاز، نستخدم useSafeAreaInsets للحصول على المسافات الآمنة (safe area insets) حول الشاشة. هذه المسافات تساعد في تجنب تداخل المحتوى مع عناصر واجهة المستخدم مثل شريط الحالة أو شريط التنقل السفلي.

  return (
    <View 
      style={[{ backgroundColor: theme.background, paddingTop: insets.top, paddingBottom: insets.bottom }, style]}
      {...props}
    />
  )
}

export default ThemedView